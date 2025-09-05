const express = require('express');
const router = express.Router();
const debugController = require('../controllers/debugController');
const { protect } = require('../controllers/authController');

// All routes are protected and require authentication
router.use(protect);

// Debug code based on user input
router.post('/analyze', debugController.debugCode);

// Get all debugging sessions for the authenticated user
router.get('/sessions', debugController.getUserDebuggingSessions);

// Get a specific debugging session
router.get('/sessions/:id', debugController.getDebuggingSession);

// Delete a debugging session
router.delete('/sessions/:id', debugController.deleteDebuggingSession);

module.exports = router;