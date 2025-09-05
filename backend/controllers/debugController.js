const CodeSnippet = require('../models/CodeSnippet');
const DebuggingSession = require('../models/DebuggingSession');

// Helper function to analyze code and provide debugging suggestions
const analyzeCodeForDebugging = (code, language, error) => {
  // In a real implementation, this would use an AI service to analyze the code
  // For this example, we'll return mock debugging suggestions
  
  let suggestions = [];
  
  // Common issues based on language
  if (language === 'JavaScript' || language === 'TypeScript') {
    // Check for common JavaScript errors
    if (error && error.includes('is not defined')) {
      suggestions.push({
        type: 'undefined_variable',
        message: 'You are using a variable that has not been defined.',
        solution: 'Make sure to declare the variable before using it.'
      });
    } else if (error && error.includes('is not a function')) {
      suggestions.push({
        type: 'not_a_function',
        message: 'You are trying to call something that is not a function.',
        solution: 'Check the variable type and make sure it is callable.'
      });
    } else if (code.includes('console.log')) {
      suggestions.push({
        type: 'debugging_code',
        message: 'You have console.log statements in your code.',
        solution: 'Consider removing console.log statements in production code.'
      });
    }
    
    // Check for potential syntax issues
    if (code.includes('{') && !code.includes('}')) {
      suggestions.push({
        type: 'missing_bracket',
        message: 'You might have a missing closing bracket.',
        solution: 'Check your code for balanced brackets.'
      });
    }
    
    // Check for potential async issues
    if (code.includes('await') && !code.includes('async')) {
      suggestions.push({
        type: 'await_without_async',
        message: 'You are using await without an async function.',
        solution: 'Make sure to mark your function as async when using await.'
      });
    }
  } else if (language === 'Python') {
    // Check for common Python errors
    if (error && error.includes('NameError')) {
      suggestions.push({
        type: 'name_error',
        message: 'You are using a variable that has not been defined.',
        solution: 'Make sure to declare the variable before using it.'
      });
    } else if (error && error.includes('IndentationError')) {
      suggestions.push({
        type: 'indentation_error',
        message: 'Your code has inconsistent indentation.',
        solution: 'Make sure your indentation is consistent throughout your code.'
      });
    }
    
    // Check for potential syntax issues
    if (code.includes('print')) {
      suggestions.push({
        type: 'debugging_code',
        message: 'You have print statements in your code.',
        solution: 'Consider removing print statements in production code.'
      });
    }
  }
  
  // Generic suggestions if none were found
  if (suggestions.length === 0) {
    suggestions.push({
      type: 'general',
      message: 'No specific issues found in your code.',
      solution: 'Try adding more details about the error you are experiencing.'
    });
  }
  
  return {
    suggestions,
    analysis: `Code analysis for ${language} code:\n${suggestions.map(s => `- ${s.message} ${s.solution}`).join('\n')}`,
    fixedCode: null // In a real implementation, this could contain AI-generated fixed code
  };
};

// Controller methods for debugging API endpoints
const debugController = {
  // Debug code based on user input
  debugCode: async (req, res) => {
    try {
      const { code, language, error, title, description } = req.body;
      const userId = req.user.id;
      
      if (!code || !language) {
        return res.status(400).json({ message: 'Code and language are required' });
      }
      
      // Analyze code for debugging
      const debugResult = analyzeCodeForDebugging(code, language, error);
      
      // Save the debugging session to the database
      const debuggingSession = new DebuggingSession({
        user: userId,
        title: title || 'Untitled Debug Session',
        language,
        code,
        error: error || '',
        analysis: debugResult.analysis,
        suggestions: debugResult.suggestions.map(s => `${s.message} ${s.solution}`),
        resolved: false
      });
      
      await debuggingSession.save();
      
      // Also save as a code snippet for backward compatibility
      const codeSnippet = new CodeSnippet({
        user: userId,
        title: title || 'Untitled Debug Session',
        language,
        code,
        description: description || '',
        type: 'debugging',
        debugInfo: {
          error: error || '',
          suggestions: debugResult.suggestions
        },
        tags: [language.toLowerCase(), 'debugging']
      });
      
      await codeSnippet.save();
      
      res.status(201).json({
        success: true,
        data: {
          debuggingSession,
          debugResult
        }
      });
    } catch (error) {
      console.error('Error debugging code:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get all debugging sessions for a user
  getUserDebuggingSessions: async (req, res) => {
    try {
      const userId = req.user.id;
      const debuggingSessions = await DebuggingSession.find({ user: userId })
        .sort({ createdAt: -1 });
      
      res.status(200).json({
        success: true,
        count: debuggingSessions.length,
        data: debuggingSessions
      });
    } catch (error) {
      console.error('Error fetching debugging sessions:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get a specific debugging session
  getDebuggingSession: async (req, res) => {
    try {
      const sessionId = req.params.id;
      const userId = req.user.id;
      
      const debuggingSession = await DebuggingSession.findOne({ 
        _id: sessionId, 
        user: userId
      });
      
      if (!debuggingSession) {
        return res.status(404).json({ message: 'Debugging session not found' });
      }
      
      res.status(200).json({
        success: true,
        data: debuggingSession
      });
    } catch (error) {
      console.error('Error fetching debugging session:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Delete a debugging session
  deleteDebuggingSession: async (req, res) => {
    try {
      const sessionId = req.params.id;
      const userId = req.user.id;
      
      const debuggingSession = await DebuggingSession.findOneAndDelete({ 
        _id: sessionId, 
        user: userId
      });
      
      if (!debuggingSession) {
        return res.status(404).json({ message: 'Debugging session not found' });
      }
      
      // Also delete from code snippets for consistency
      await CodeSnippet.findOneAndDelete({
        user: userId,
        type: 'debugging',
        title: debuggingSession.title
      });
      
      res.status(200).json({
        success: true,
        message: 'Debugging session deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting debugging session:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = debugController;