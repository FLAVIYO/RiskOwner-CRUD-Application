import express from 'express';
import prisma from '../prisma/db.js';

const router = express.Router();

// Route to create a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    // Create a new user in the database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get all users
router.get('/', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to get a single user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Fetch the user with the specified ID from the database
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });
    if (!user) {
      res.status(404).json({ error: 'User not found' });
      return;
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to update a user by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    // Update the user with the specified ID in the database
    const updatedUser = await prisma.user.update({
      where: {
        id,
      },
      data: {
        name,
        email,
      },
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Route to delete a user by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Delete the user with the specified ID from the database
    await prisma.user.delete({
      where: {
        id,
      },
    });
    res.status(204).send();
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
