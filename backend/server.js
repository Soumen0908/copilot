const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/authRoutes');
const codeGenRoutes = require('./routes/codeGenRoutes');
const debugRoutes = require('./routes/debugRoutes');
const interviewRoutes = require('./routes/interviewRoutes');

// Initialize express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/code-generation', codeGenRoutes);
app.use('/api/debug', debugRoutes);
app.use('/api/interview', interviewRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to CodeMentor API');
});

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/code-mentor')
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});