const express = require('express');
const router = express.Router();
const codeGenController = require('../controllers/codeGenController');
const { protect } = require('../controllers/authController');

// All routes are protected and require authentication
router.use(protect);

// Generate code based on prompt
router.post('/generate', codeGenController.generateCode);

// Get all code snippets for the authenticated user
router.get('/snippets', codeGenController.getUserCodeSnippets);

// Get a specific code snippet
router.get('/snippets/:id', codeGenController.getCodeSnippet);

// Delete a code snippet
router.delete('/snippets/:id', codeGenController.deleteCodeSnippet);

module.exports = router;