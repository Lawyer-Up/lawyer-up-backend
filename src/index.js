import { z } from "zod";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import Anthropic from "@anthropic-ai/sdk";

const anthropic = new Anthropic({
  apiKey: process.env.CLAUDE_API_KEY, // Ensure this is in your .env
});

// Schema for document generation
const documentGenerationSchema = z.object({
  documentType: z.enum([
    "LegalNotice",
    "BailApplication",
    "ClientEmail",
    "CourtReply",
    "Affidavit",
  ]),
  recipient: z.string().min(3),
  jurisdiction: z.string().default("State Specific"),
  tone: z.enum(["Formal", "Assertive", "Conciliatory"]).default("Formal"),
  customInstructions: z.string().optional(),
  cibcId: z.string().optional(),
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Authentication middleware
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });
    if (!user) return res.status(401).json({ error: "Unauthorized" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};

app.post("/api/auth/register", async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Registration failed" });
  }
});

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, {
      expiresIn: "7d",
    });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Login failed" });
  }
});

app.get("/api/workspaces", authenticate, async (req, res) => {
  try {
    const workspaces = await prisma.workspace.findMany({
      where: { userId: req.user.id },
      include: {
        case: true,
        documents: true,
        notes: true,
        timeline: true,
        arguments: true,
      },
    });
    res.json(workspaces);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch workspaces" });
  }
});

app.post("/api/workspaces", authenticate, async (req, res) => {
  try {
    const workspace = await prisma.workspace.create({
      data: {
        name: req.body.name || "New Workspace",
        description: req.body.description,
        userId: req.user.id,
      },
    });
    res.json(workspace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create workspace" });
  }
});

app.post(
  "/api/workspaces/:workspaceId/case",
  authenticate,
  async (req, res) => {
    try {
      const { clientInfo, caseDetails, documents } = req.body;

      const caseData = await prisma.case.create({
        data: {
          workspaceId: req.params.workspaceId,

          clientName: clientInfo.name,
          clientAge: parseInt(clientInfo.age) || undefined,
          clientContact: clientInfo.contact,
          clientEmail: clientInfo.email,
          clientOccupation: clientInfo.occupation,
          clientAddress: clientInfo.address,
          firText: clientInfo.firReport,
          idProofUrl: clientInfo.idProof,

          caseType: caseDetails.caseType,
          description: caseDetails.description,
          factsDate: caseDetails.facts.date
            ? new Date(caseDetails.facts.date)
            : undefined,
          factsPlace: caseDetails.facts.place,
          factsWitnesses: caseDetails.facts.witnesses,
          policeStation: caseDetails.policeStation,
          opposingParty: caseDetails.opposingParty,
          previousCounsel: caseDetails.previousCounsel,

          courtOrders: documents.courtOrders,
          supportingDocs: documents.supportingDocs,
          legalHistory: documents.legalHistory,
          urgency: documents.urgency,
          notes: documents.notes,
        },
      });

      res.json(caseData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create case" });
    }
  }
);

app.put("/api/cases/:caseId", authenticate, async (req, res) => {
  try {
    const caseData = await prisma.case.update({
      where: { id: req.params.caseId },
      data: req.body,
    });
    res.json(caseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update case" });
  }
});

app.post(
  "/api/workspaces/:workspaceId/documents",
  authenticate,
  upload.single("file"),
  async (req, res) => {
    try {
      const { title, type } = req.body;
      const fileUrl = req.file ? `/uploads/${req.file.filename}` : undefined;

      const document = await prisma.document.create({
        data: {
          workspaceId: req.params.workspaceId,
          title,
          type,
          fileUrl,
        },
      });

      res.json(document);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to upload document" });
    }
  }
);

app.post(
  "/api/workspaces/:workspaceId/notes",
  authenticate,
  async (req, res) => {
    try {
      const note = await prisma.note.create({
        data: {
          workspaceId: req.params.workspaceId,
          title: req.body.title || "New Note",
          content: req.body.content,
        },
      });
      res.json(note);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create note" });
    }
  }
);

// Timeline Event Routes
app.post(
  "/api/workspaces/:workspaceId/timeline",
  authenticate,
  async (req, res) => {
    try {
      const event = await prisma.timelineEvent.create({
        data: {
          workspaceId: req.params.workspaceId,
          title: req.body.title,
          description: req.body.description,
          date: new Date(req.body.date),
          completed: req.body.completed || false,
        },
      });
      res.json(event);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create timeline event" });
    }
  }
);

// Argument Routes
app.post(
  "/api/workspaces/:workspaceId/arguments",
  authenticate,
  async (req, res) => {
    try {
      const argument = await prisma.argument.create({
        data: {
          workspaceId: req.params.workspaceId,
          title: req.body.title || "New Argument",
          content: req.body.content,
        },
      });
      res.json(argument);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to create argument" });
    }
  }
);

// AI Argument Generation
app.post(
  "/api/workspaces/:workspaceId/generate-arguments",
  authenticate,
  async (req, res) => {
    try {
      // In a real implementation, this would call an AI service
      // For now, we return mock data
      const mockArguments = [
        "Establish duty of care between the parties based on contractual relationship",
        "Demonstrate breach of duty through documented communications",
        "Show causation between breach and financial harm with accounting records",
        "Quantify damages using financial statements and expert testimony",
      ];

      // Simulate processing delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      res.json({ arguments: mockArguments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate arguments" });
    }
  }
);

// CIBC Generation Endpoint
app.post(
  "/api/workspaces/:workspaceId/cibc",
  authenticate,
  async (req, res) => {
    try {
      const { workspaceId } = req.params;

      const workspace = await prisma.workspace.findFirst({
        where: { id: workspaceId, userId: req.user.id },
        include: { case: true },
      });

      if (!workspace?.case) {
        return res.status(404).json({ error: "Case data not found" });
      }

      // Prepare case data for Claude
      const caseData = workspace.case;
      const prompt = createCIBCPrompt(caseData);

      // Call Claude API
      const response = await anthropic.messages.create({
        model: "claude-3-haiku-20240307",
        max_tokens: 2000,
        temperature: 0.2,
        system:
          "You are a senior Indian legal analyst. Generate comprehensive CIBC documents from case data.",
        messages: [{ role: "user", content: prompt }],
      });

      const cibcContent = response.content[0].text;

      // Validate and save
      if (!isValidCIBC(cibcContent)) {
        throw new Error("Invalid CIBC generated");
      }

      const cibcEntry = await prisma.CIBC.create({
        data: {
          workspaceId,
          title: `CIBC Analysis - ${new Date().toLocaleDateString("en-IN")}`,
          content: cibcContent,
        },
      });

      res.json(cibcEntry);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate CIBC" });
    }
  }
);

// Helper functions
const createCIBCPrompt = (caseData) => {
  return `Generate a Case Intelligence Briefing Document (CIBC) using this case data:
  
  **Client Information**
  - Name: ${caseData.clientName || "[Not Provided]"}
  - Contact: ${caseData.clientContact || "[Not Provided]"}
  - FIR Details: ${caseData.firText || "[No FIR text available]"}

  **Case Details**
  - Type: ${caseData.caseType}
  - Description: ${caseData.description}
  - Key Dates: ${caseData.factsDate?.toISOString() || "[Date Not Specified]"}
  - Location: ${caseData.factsPlace || "[Location Unknown]"}

  **Legal Context**
  - Previous Counsel: ${caseData.previousCounsel || "None"}
  - Supporting Docs: ${caseData.supportingDocs || "None provided"}
  - Urgency: ${caseData.urgency || "Standard priority"}

  Follow this structure:
  1. **Case Overview** - Concise case summary
  2. **Factual Matrix** - Timeline and key events
  3. **Legal Parameters** - Applicable laws/provisions
  4. **Strategic Analysis** - Strengths/weaknesses
  5. **Action Plan** - Recommended next steps

  Guidelines:
  - Use bullet points for readability
  - Mark missing critical info as [REQUIRES CLARIFICATION]
  - Cite specific sections from FIR text
  - Suggest relevant Indian legal procedures
  - Maintain professional legal tone`;
};

const isValidCIBC = (content) => {
  const requiredSections = [
    "Case Overview",
    "Factual Matrix",
    "Legal Parameters",
    "Strategic Analysis",
    "Action Plan",
  ];
  return requiredSections.every((section) => content.includes(section));
};

// // Generate legal strategy based on case data
// const generateLegalStrategy = (caseData) => {
//   const strategies = [];

//   if (caseData.factsWitnesses) {
//     strategies.push(
//       `- Witness testimony from ${caseData.factsWitnesses} should be prioritized`
//     );
//   }

//   if (caseData.urgency?.toLowerCase().includes("bail")) {
//     strategies.push("- Immediate bail application under CrPC Section 439");
//   }

//   if (caseData.caseType?.toLowerCase().includes("property")) {
//     strategies.push(
//       "- Consider injunction application under CPC Order 39 Rule 1"
//     );
//   }

//   return strategies.length > 0
//     ? strategies.join("\n   ")
//     : "Case strategy requires further analysis";
// };

app.get("/api/workspaces/:workspaceId/cibc", authenticate, async (req, res) => {
  try {
    const cibcEntries = await prisma.cIBC.findMany({
      where: {
        workspaceId: req.params.workspaceId,
        workspace: {
          userId: req.user.id,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    res.json(cibcEntries);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch CIBC entries" });
  }
});

app.post(
  "/api/workspaces/:workspaceId/generate-document",
  authenticate,
  async (req, res) => {
    try {
      // Validate input
      const params = documentGenerationSchema.parse(req.body);
      const { workspaceId } = req.params;

      // Get CIBC context
      const cibcData = params.cibcId
        ? await prisma.cIBC.findFirst({
            where: {
              id: params.cibcId,
              workspaceId,
            },
          })
        : await prisma.cIBC.findFirst({
            where: { workspaceId },
            orderBy: { createdAt: "desc" },
          });

      if (!cibcData) {
        return res.status(400).json({ error: "No CIBC data found" });
      }

      // Construct Claude prompt
      const messages = [
        {
          role: "user",
          content: generateDocumentPrompt(cibcData.content, params),
        },
      ];

      // Call Claude API
      const response = await anthropic.messages.create({
        model: "claude-3-sonnet-20240229",
        max_tokens: 4000,
        temperature: 0.3,
        system: getSystemPrompt(params),
        messages,
      });

      // Validate and process response
      const generatedContent = response.content[0].text;
      if (!isValidLegalDocument(generatedContent)) {
        throw new Error("Invalid document generated");
      }

      // Save to database
      const document = await prisma.legalDocument.create({
        data: {
          workspaceId,
          cibcId: cibcData.id,
          title: `${params.documentType}_${params.recipient}_${new Date()
            .toISOString()
            .slice(0, 10)}`,
          type: params.documentType,
          recipient: params.recipient,
          jurisdiction: params.jurisdiction,
          tone: params.tone,
          customInstructions: params.customInstructions,
          content: generatedContent,
        },
      });

      res.json(document);
    } catch (error) {
      console.error("Document generation error:", error);
      res.status(500).json({
        error: "Document generation failed",
        details: error.message,
      });
    }
  }
);

// Helper functions
function getSystemPrompt(params) {
  return `You are a senior Indian legal draftsman. Strictly follow these rules:
  1. Use ONLY facts from the provided Case Brief
  2. Cite only laws/sections explicitly mentioned
  3. For missing critical info: use [TO BE CONFIRMED]
  4. Preserve arguments from "Preliminary Legal Strategy"
  5. Follow ${params.jurisdiction} format
  6. Maintain ${params.tone} tone
  7. Never invent facts or legal positions
  8. Structure document per Indian legal practice`;
}

function generateDocumentPrompt(cibcContent, params) {
  const sections = extractCIBCSections(cibcContent);

  return `Generate ${params.documentType} for ${params.recipient} in ${
    params.jurisdiction
  }.
  
  **Case Brief Summary**
  ${sections["Client Overview"]?.join("\n") || "N/A"}
  
  Key Facts:
  ${sections["Key Facts"]?.join("\n") || "N/A"}
  
  Applicable Laws:
  ${sections["Applicable Laws & Sections"]?.join("\n") || "N/A"}
  
  Legal Strategy:
  ${sections["Preliminary Legal Strategy & Arguments"]?.join("\n") || "N/A"}
  
  **Document Requirements**
  - Recipient: ${params.recipient}
  - Jurisdiction: ${params.jurisdiction}
  - Tone: ${params.tone}
  - Special Instructions: ${params.customInstructions || "None"}
  
  Required Structure:
  ${getDocumentStructure(params.documentType)}`;
}

const extractCIBCSections = (content) => {
  const sections = {};
  const lines = content.split("\n");
  let currentSection = "";

  lines.forEach((line) => {
    const sectionMatch = line.match(/\d+\.\s*\*\*(.*?)\*\*/);
    if (sectionMatch) {
      currentSection = sectionMatch[1].trim();
      sections[currentSection] = [];
    } else if (currentSection) {
      sections[currentSection].push(line.trim());
    }
  });

  return sections;
};

function getDocumentStructure(docType) {
  const structures = {
    LegalNotice: `
      [Letterhead]
      To: [Recipient]
      
      Subject: Legal Notice under [Law Sections]
      
      Reference:
      - Our Client: [Name]
      - Brief Facts: [Chronology]
      
      Legal Basis:
      [Cited Laws & Arguments]
      
      Demand:
      [Specific Relief Sought]
      
      Place: [Jurisdiction]
      Date: [Today's Date]
      
      Advocate Details`,
    // Add other document structures
  };
  return structures[docType] || "Standard legal format";
}

function isValidLegalDocument(content) {
  // Basic validation checks
  const requiredMarkers = ["Advocate Details", "Subject:", "Reference:"];
  return requiredMarkers.every((marker) => content.includes(marker));
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
