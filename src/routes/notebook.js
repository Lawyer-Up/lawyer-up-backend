const express = require('express');
const { PrismaClient } = require('@prisma/client');
const auth = require('../middleware/auth');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', auth, async (req, res) => {
  try {
    const notebooks = await prisma.notebook.findMany({
      where: {
        userId: req.user.id,
      },
      include: {
        sources: true,
      },
      orderBy: {
        updatedAt: 'desc',
      },
    });

    res.json(notebooks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching notebooks' });
  }
});

router.post('/', auth, async (req, res) => {
  try {
    const { title, description } = req.body;

    const notebook = await prisma.notebook.create({
      data: {
        title,
        description,
        userId: req.user.id,
      },
    });

    res.status(201).json(notebook);
  } catch (error) {
    res.status(500).json({ error: 'Error creating notebook' });
  }
});

router.patch('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const notebook = await prisma.notebook.update({
      where: {
        id,
        userId: req.user.id,
      },
      data: {
        title,
        description,
      },
    });

    res.json(notebook);
  } catch (error) {
    res.status(500).json({ error: 'Error updating notebook' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const { id } = req.params;

    await prisma.notebook.delete({
      where: {
        id,
        userId: req.user.id,
      },
    });

    res.json({ message: 'Notebook deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting notebook' });
  }
});

module.exports = router; 