const express = require('express');
const User = require('../models/Users');

const router = express.Router();

// Get all users
router.get('/allUsers', async (req, res) => {
  try {
    const u = await User.find();
    res.json(u);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new user
router.post('/createUser', async (req, res) => {
  try {
    const u = await User.create(req.body);
    res.status(201).json(u);
  }
  catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a user by ID
router.get('/getUser/:id', (req, res) => {
  User.findById(req.params.id)
    .then(user => user ? res.json(user) : res.status(404).json({ message: 'User not found' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

// Update user by ID
router.put('/users/:id', (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(user => user ? res.json(user) : res.status(404).json({ message: 'User not found' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

// Delete user by ID
router.delete('/users/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then(user => user ? res.json({ message: 'User deleted' }) : res.status(404).json({ message: 'User not found' }))
    .catch(err => res.status(500).json({ message: err.message }));
});

module.exports = router;
