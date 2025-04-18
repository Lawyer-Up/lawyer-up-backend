import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, 'uploads');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

const prisma = new PrismaClient();
const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Authentication middleware
const authenticate = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
};

app.post('/api/auth/register', async (req, res) => {
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

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Registration failed' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '7d' });
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Login failed' });
  }
});

app.get('/api/workspaces', authenticate, async (req, res) => {
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
    res.status(500).json({ error: 'Failed to fetch workspaces' });
  }
});

app.post('/api/workspaces', authenticate, async (req, res) => {
  try {
    const workspace = await prisma.workspace.create({
      data: {
        name: req.body.name || 'New Workspace',
        description: req.body.description,
        userId: req.user.id,
      },
    });
    res.json(workspace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create workspace' });
  }
});

app.post('/api/workspaces/:workspaceId/case', authenticate, async (req, res) => {
  try {
    const {
      clientInfo,
      caseDetails,
      documents
    } = req.body;

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
        factsDate: caseDetails.facts.date ? new Date(caseDetails.facts.date) : undefined,
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
    res.status(500).json({ error: 'Failed to create case' });
  }
});

app.put('/api/cases/:caseId', authenticate, async (req, res) => {
  try {
    const caseData = await prisma.case.update({
      where: { id: req.params.caseId },
      data: req.body,
    });
    res.json(caseData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to update case' });
  }
});

// Document Routes
app.post('/api/workspaces/:workspaceId/documents', 
  authenticate, 
  upload.single('file'), 
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
      res.status(500).json({ error: 'Failed to upload document' });
    }
  }
);

// Note Routes
app.post('/api/workspaces/:workspaceId/notes', authenticate, async (req, res) => {
  try {
    const note = await prisma.note.create({
      data: {
        workspaceId: req.params.workspaceId,
        title: req.body.title || 'New Note',
        content: req.body.content,
      },
    });
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create note' });
  }
});

// Timeline Event Routes
app.post('/api/workspaces/:workspaceId/timeline', authenticate, async (req, res) => {
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
    res.status(500).json({ error: 'Failed to create timeline event' });
  }
});

// Argument Routes
app.post('/api/workspaces/:workspaceId/arguments', authenticate, async (req, res) => {
  try {
    const argument = await prisma.argument.create({
      data: {
        workspaceId: req.params.workspaceId,
        title: req.body.title || 'New Argument',
        content: req.body.content,
      },
    });
    res.json(argument);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create argument' });
  }
});

// AI Argument Generation
app.post('/api/workspaces/:workspaceId/generate-arguments', authenticate, async (req, res) => {
  try {
    // In a real implementation, this would call an AI service
    // For now, we return mock data
    const mockArguments = [
      "Establish duty of care between the parties based on contractual relationship",
      "Demonstrate breach of duty through documented communications",
      "Show causation between breach and financial harm with accounting records",
      "Quantify damages using financial statements and expert testimony"
    ];

    // Simulate processing delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    res.json({ arguments: mockArguments });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to generate arguments' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});