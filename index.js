const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const contactUser = require('./routes/contactUser');
require('dotenv').config();
const MONGO_URI = process.env.URL;

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(MONGO_URI);

// Use Routes
app.use('/api/user', userRoutes);
app.use('/api/contact', contactUser);


// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
