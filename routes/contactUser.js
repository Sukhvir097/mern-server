const express = require('express');
const Contact = require('../models/contact');

const router = express.Router();

// POST: /api/contact
router.post('/', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const contact = await Contact.create({ name, email, message });
    res.status(201).json(contact);
  } catch (err) {
    console.error('Error saving contact message:', err);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

module.exports = router;
