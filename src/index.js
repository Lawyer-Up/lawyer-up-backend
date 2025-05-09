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
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

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

const documentTemplateSchema = z.object({
  templateName: z.enum([
    "Bail",
    "ClientIntakeForm",
    "CivilSuit",
    "WritPetition",
    "PowerOfAttorney"
  ]),
  workspaceId: z.string(),
  customInstructions: z.string().optional()
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

app.get("/api/workspaces/:workspaceId/notes", authenticate, async (req, res) => {
  try {
    const { workspaceId } = req.params;

    const notes = await prisma.note.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" },
    });

    res.json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ error: "Failed to fetch notes" });
  }
});

app.get("/api/workspaces/:workspaceId/timeline", authenticate, async (req, res) => {
  try {
    const { workspaceId } = req.params;

    const events = await prisma.timelineEvent.findMany({
      where: { workspaceId },
      orderBy: { date: "asc" },
    });

    res.json(events);
  } catch (error) {
    console.error("Error fetching timeline events:", error);
    res.status(500).json({ error: "Failed to fetch timeline events" });
  }
});


app.get("/api/workspaces/:workspaceId/cibc", authenticate, async (req, res) => {
  try {
    const { workspaceId } = req.params;

    const cibcDocuments = await prisma.cIBC.findMany({
      where: { workspaceId },
      orderBy: { createdAt: "desc" }, // Optional: order by most recent
      select: {
        id: true,
        title: true,
        content: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    res.json(cibcDocuments);
  } catch (error) {
    console.error("Error fetching CIBC documents:", error);
    res.status(500).json({ error: "Failed to fetch CIBC documents" });
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

app.delete(
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

app.delete("/api/workspaces/:workspaceId/notes/:noteId", authenticate, async (req, res) => {
  const { workspaceId, noteId } = req.params;
  const userId = req.user.id;

  try {
    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });

    if (!workspace) {
      return res.status(404).json({ error: "Workspace not found" });
    }
    const note = await prisma.note.findUnique({
      where: { id: noteId },
    });

    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }

    await prisma.note.delete({
      where: { id: noteId },
    });

    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error deleting note:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


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

// In your backend API (already exists in your code)
app.get("/api/workspaces/:workspaceId/case", authenticate, async (req, res) => {
  try {
    const caseData = await prisma.case.findFirst({
      where: {
        workspaceId: req.params.workspaceId,
        workspace: {
          userId: req.user.id,
        },
      },
    });

    if (!caseData) {
      return res.status(404).json({ error: "Case not found" });
    }

    res.json(caseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch case data" });
  }
});

app.put("/api/workspaces/:workspaceId/timeline/:eventId", authenticate, async (req, res) => {
  const { workspaceId, eventId } = req.params;
  const userId = req.user.id;

  try {
    const event = await prisma.timelineEvent.findUnique({
      where: { id: eventId },
    });

    if (!event || event.workspaceId !== workspaceId) {
      return res.status(404).json({ error: "Timeline event not found" });
    }

    const workspace = await prisma.workspace.findUnique({
      where: { id: workspaceId },
    });

    if (!workspace || workspace.userId !== userId) {
      return res.status(403).json({ error: "Unauthorized" });
    }

    await prisma.timelineEvent.delete({
      where: { id: eventId },
    });

    res.json({ message: "Timeline event deleted successfully" });
  } catch (error) {
    console.error("Error deleting timeline event:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

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

app.post(
  "/api/workspaces/:workspaceId/generate-arguments",
  authenticate,
  async (req, res) => {
    try {
      const mockArguments = [
        "Establish duty of care between the parties based on contractual relationship",
        "Demonstrate breach of duty through documented communications",
        "Show causation between breach and financial harm with accounting records",
        "Quantify damages using financial statements and expert testimony",
      ];

      await new Promise((resolve) => setTimeout(resolve, 1500));

      res.json({ arguments: mockArguments });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to generate arguments" });
    }
  }
);

// CIBC Generation Endpoint - Updated for Gemini
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

      // Prepare case data for Gemini
      const caseData = workspace.case;
      const prompt = createCIBCPrompt(caseData);

      // Initialize the Gemini model
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const cibcContent = response.text();
      console.log(cibcContent)

      // Validate and save
      if (!isValidCIBC(cibcContent)) {
        throw new Error("Invalid CIBC generated");
      }
      console.log(prisma)
      const cibcEntry = await prisma.CIBC.create({
        data: {
          workspaceId,
          title: `CIBC Analysis - ${new Date().toLocaleDateString("en-IN")}`,
          content: cibcContent,
        },
      });

      res.json(cibcEntry);
    } catch (error) {
      console.error("CIBC generation error:", error);
      res.status(500).json({ 
        error: "Failed to generate CIBC",
        details: error.message 
      });
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
            where: { id: params.cibcId, workspaceId }
          })
        : await prisma.cIBC.findFirst({
            where: { workspaceId },
            orderBy: { createdAt: "desc" }
          });

      if (!cibcData) {
        return res.status(400).json({ error: "No CIBC data found" });
      }

      // Construct prompt
      const prompt = generateDocumentPrompt(cibcData.content, params);
      const systemPrompt = getSystemPrompt(params);

      // Initialize the model
      const model = genAI.getGenerativeModel({ 
        model: "gemini-1.5-flash",
        systemInstruction: systemPrompt
      });
      
      // Generate content
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedContent = response.text();

      // Validate response
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

// Argument generation schema
const argumentGenerationSchema = z.object({
  cibcId: z.string(),
  argumentType: z.enum([
    "OpeningStatement",
    "ClosingArgument",
    "MotionArgument",
    "CrossExamination",
    "AppealGrounds",
  ]),
  targetParty: z.string().optional(),
  legalFocus: z.string().optional(),
  customInstructions: z.string().optional(),
});

app.post("/api/cibc/generate-arguments", authenticate, async (req, res) => {
  try {
    const { cibcId, argumentType, targetParty, legalFocus, customInstructions } =
      argumentGenerationSchema.parse(req.body);

    // Get CIBC content
    const cibc = await prisma.cIBC.findUnique({
      where: { id: cibcId },
      select: { content: true, workspaceId: true },
    });

    if (!cibc) {
      return res.status(404).json({ error: "CIBC document not found" });
    }

    const sections = extractCIBCSections(cibc.content);

    const prompt = `Generate strong legal arguments for ${argumentType} based on this CIBC analysis:
    
    **Case Overview**
    ${sections["Case Overview"]?.join("\n") || "N/A"}
    
    **Key Facts**
    ${sections["Factual Matrix"]?.join("\n") || "N/A"}
    
    **Legal Context**
    ${sections["Legal Parameters"]?.join("\n") || "N/A"}
    
    Requirements:
    - Argument type: ${argumentType}
    ${targetParty ? `- Target party: ${targetParty}\n` : ''}
    ${legalFocus ? `- Legal focus: ${legalFocus}\n` : ''}
    ${customInstructions ? `- Custom instructions: ${customInstructions}\n` : ''}
    - Cite relevant Indian legal provisions
    - Include evidentiary references
    - Structure arguments logically
    - Highlight strongest points first`;

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // Save to database
    const argument = await prisma.argument.create({
      data: {
        workspaceId: cibc.workspaceId,
        title: `${argumentType} Arguments`,
        content: text
      }
    });

    res.json({
      id: argument.id,
      arguments: argument.content,
      cibcId,
      workspaceId: cibc.workspaceId,
      generatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Argument generation error:", error);
    res.status(500).json({
      error: "Failed to generate arguments",
      details: error.message,
    });
  }
});

app.post(
  "/api/workspaces/:workspaceId/generate-standard-document",
  authenticate,
  async (req, res) => {
    try {
      const { templateName, customInstructions } = documentTemplateSchema.parse(req.body);
      const { workspaceId } = req.params;

      // Get case data
      const caseData = await prisma.case.findFirst({
        where: { workspaceId },
        include: { workspace: true }
      });

      if (!caseData) {
        return res.status(404).json({ error: "Case data not found" });
      }

      // Get latest CIBC if available
      const cibc = await prisma.cIBC.findFirst({
        where: { workspaceId },
        orderBy: { createdAt: "desc" }
      });

      // Generate document using Gemini
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
      const prompt = createDocumentPrompt(templateName, caseData, cibc?.content, customInstructions);
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const generatedContent = response.text();

      // Save the generated document
      const document = await prisma.legalDocument.create({
        data: {
          workspaceId,
          title: `${templateName}_${new Date().toISOString().slice(0, 10)}`,
          type: templateName,
          content: generatedContent,
          isStandardDocument: true
        }
      });

      res.json(document);
    } catch (error) {
      console.error("Document generation error:", error);
      res.status(500).json({
        error: "Document generation failed",
        details: error.message
      });
    }
  }
);

// Helper function to create document prompts
function createDocumentPrompt(templateName, caseData, cibcContent, customInstructions) {
  const templates = {
    Bail: `Generate a comprehensive Bail Application document for Indian courts based on:
    
    **Client Information**
    - Name: ${caseData.clientName}
    - Age: ${caseData.clientAge || 'Not specified'}
    - Address: ${caseData.clientAddress || 'Not specified'}
    
    **Case Details**
    - FIR Details: ${caseData.firText || 'Not available'}
    - Police Station: ${caseData.policeStation || 'Not specified'}
    - Sections: ${caseData.applicableSections || 'To be confirmed'}
    
    **Additional Context**
    ${cibcContent ? `CIBC Analysis:\n${cibcContent}\n` : ''}
    ${customInstructions ? `Custom Instructions:\n${customInstructions}\n` : ''}
    
    Required Structure:
    1. Court name and case number (if available)
    2. Applicant details
    3. Brief facts of the case
    4. Grounds for bail with legal citations
    5. Undertakings by applicant
    6. Prayer for relief
    
    Follow Indian legal format and cite relevant CrPC sections.`,

    ClientIntakeForm: `Generate a detailed Client Intake Form template with:
    
    **Client Information Section**
    - Personal details (name, age, contact, address)
    - Identification documents
    - Occupation and income details
    
    **Case Information Section**
    - Case type dropdown
    - Opposing party details
    - Previous legal history
    
    **Document Checklist**
    - Required documents for this case type
    - Space for client to mark availability
    
    **Declaration Section**
    - Client verification statements
    - Data privacy acknowledgement
    
    Make it professional yet client-friendly.`,

    CivilSuit: `Generate a Civil Suit draft for ${caseData.caseType || 'the case'}...`,
    WritPetition: `Generate a Writ Petition under Article 226 of Indian Constitution...`,
    PowerOfAttorney: `Generate a Power of Attorney document for ${caseData.clientName}...`
  };

  return templates[templateName];
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
