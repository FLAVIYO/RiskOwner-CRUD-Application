import express from 'express';
import prisma from '../prisma/db.js';

const router = express.Router();

//* Route to create a new RiskOwner
router.post('/', async (req, res) => {
  const { title, name,email, role } = req.body;
  try {
    //* Create a new RiskOwner in the database
    const newRiskOwner = await prisma.RiskOwner.create({
      data: {
        title,
        name,
        email,
        role,
      },
    });
    res.status(201).json(newRiskOwner);
  } catch (error) {
    console.error('Error creating RiskOwner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//* Route to get all RiskOwner
router.get('/', async (req, res) => {
  try {
    // Fetch all RiskOwner from the database
    const riskOwner = await prisma.RiskOwner.findMany();
    res.status(200).json(riskOwner);
  } catch (error) {
    console.error('Error fetching RiskOwner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//* Route to get a single RiskOwner by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //* Fetch the RiskOwner with the specified ID from the database
    const riskOwner = await prisma.RiskOwner.findUnique({
      where: {
        id: String(id),
      },
    });
    if (!riskOwner) {
      res.status(404).json({ error: 'RiskOwner not found' });
      return;
    }
    res.status(200).json(riskOwner);
  } catch (error) {
    console.error('Error fetching RiskOwner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//* Route to update a RiskOwner by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
  const { title, name, email, role } = req.body;
  try {
    //* Update the RiskOwner with the specified ID in the database
    const updatedRiskOwner = await prisma.RiskOwner.update({
      where: {
        id,
      },
      data: {
        title,
        name,
        email,
        role,
      },
    });
    res.status(200).json(updatedRiskOwner); //* Send the updated RiskOwner, as a response
  } catch (error) {
    console.error('Error updating RiskOwner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
  

//* Route to delete a RiskOwner by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    //* Delete the RiskOwner with the specified ID from the database
    await prisma.RiskOwner.delete({
      where: {
        id: String(id), 
      },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting RiskOwner:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
