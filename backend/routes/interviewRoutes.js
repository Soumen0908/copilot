const express = require('express');
const router = express.Router();
const interviewController = require('../controllers/interviewController');
const { protect } = require('../controllers/authController');

// All routes are protected and require authentication
router.use(protect);

// Start a new interview session
router.post('/sessions', interviewController.startInterviewSession);

// Get all interview sessions for the authenticated user
router.get('/sessions', interviewController.getUserInterviewSessions);

// Get a specific interview session
router.get('/sessions/:id', interviewController.getInterviewSession);

// Submit answers for an interview session
router.post('/sessions/:id/submit', interviewController.submitInterviewAnswers);

// Delete an interview session
router.delete('/sessions/:id', interviewController.deleteInterviewSession);

module.exports = router;