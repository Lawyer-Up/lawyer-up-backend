const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/notebook/:notebookId', auth, async (req, res) => {
  try {
    const { notebookId } = req.params;

    const sources = await prisma.source.findMany({
      where: {
        notebookId,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    res.json(sources);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching sources' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { title, content, notebookId } = req.body;

    const notebook = await prisma.notebook.findFirst({
      where: {
        id: notebookId,
        userId: req.user.id,
      },
    });

    if (!notebook) {
      return res.status(404).json({ error: 'Notebook not found' });
    }

    const source = await prisma.source.create({
      data: {
        title,
        content,
        notebookId,
      },
    });

    res.status(201).json(source);
  } catch (error) {
    res.status(500).json({ error: 'Error creating source' });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    // Verify source belongs to user's notebook
    const source = await prisma.source.findFirst({
      where: {
        id,
      },
      include: {
        notebook: true,
      },
    });

    if (!source || source.notebook.userId !== req.user.id) {
      return res.status(404).json({ error: 'Source not found' });
    }

    const updatedSource = await prisma.source.update({
      where: {
        id,
      },
      data: {
        title,
        content,
      },
    });

    res.json(updatedSource);
  } catch (error) {
    res.status(500).json({ error: 'Error updating source' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    // Verify source belongs to user's notebook
    const source = await prisma.source.findFirst({
      where: {
        id,
      },
      include: {
        notebook: true,
      },
    });

    if (!source || source.notebook.userId !== req.user.id) {
      return res.status(404).json({ error: 'Source not found' });
    }

    await prisma.source.delete({
      where: {
        id,
      },
    });

    res.json({ message: 'Source deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting source' });
  }
});

module.exports = router; 