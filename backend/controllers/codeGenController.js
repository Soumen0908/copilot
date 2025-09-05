const CodeSnippet = require('../models/CodeSnippet');

// Helper function to generate code based on prompt
const generateCodeFromPrompt = (prompt, language) => {
  // In a real implementation, this would call an AI service like OpenAI API
  // For this example, we'll return mock responses based on language
  
  if (language === 'JavaScript' || language === 'TypeScript') {
    return `// Generated JavaScript code based on prompt: ${prompt}

const processData = (input) => {
  // Parse the input
  const data = JSON.parse(input);
  
  // Process the data
  const result = data.map(item => {
    return {
      id: item.id,
      value: item.value * 2,
      processed: true
    };
  });
  
  return result;
};

// Example usage
const exampleData = '[{"id":1,"value":10}]';
console.log(processData(exampleData));
`;
  } else if (language === 'Python') {
    return `# Generated Python code based on prompt: ${prompt}

import json

def process_data(input_str):
    # Parse the input
    data = json.loads(input_str)
    
    # Process the data
    result = []
    for item in data:
        result.append({
            "id": item["id"],
            "value": item["value"] * 2,
            "processed": True
        })
    
    return result

# Example usage
example_data = '[{"id":1,"value":10}]'
print(process_data(example_data))
`;
  } else {
    return `// Generated code for ${language} based on prompt: ${prompt}\n\n// Sorry, specific code generation for ${language} is not implemented yet.`;
  }
};

// Controller methods for code generation API endpoints
const codeGenController = {
  // Generate code based on user prompt
  generateCode: async (req, res) => {
    try {
      const { prompt, language, title, description } = req.body;
      const userId = req.user.id;
      
      if (!prompt || !language) {
        return res.status(400).json({ message: 'Prompt and language are required' });
      }
      
      // Generate code using the helper function
      const generatedCode = generateCodeFromPrompt(prompt, language);
      
      // Save the code snippet to the database
      const codeSnippet = new CodeSnippet({
        user: userId,
        title: title || 'Untitled Code Snippet',
        language,
        code: generatedCode,
        description: description || '',
        type: 'generation',
        generationPrompt: prompt,
        generatedCode: generatedCode,
        tags: [language.toLowerCase(), 'generated']
      });
      
      await codeSnippet.save();
      
      res.status(201).json({
        success: true,
        data: codeSnippet
      });
    } catch (error) {
      console.error('Error generating code:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get all code snippets for a user
  getUserCodeSnippets: async (req, res) => {
    try {
      const userId = req.user.id;
      const codeSnippets = await CodeSnippet.find({ user: userId, type: 'generation' })
        .sort({ createdAt: -1 });
      
      res.status(200).json({
        success: true,
        count: codeSnippets.length,
        data: codeSnippets
      });
    } catch (error) {
      console.error('Error fetching code snippets:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get a specific code snippet
  getCodeSnippet: async (req, res) => {
    try {
      const snippetId = req.params.id;
      const userId = req.user.id;
      
      const codeSnippet = await CodeSnippet.findOne({ _id: snippetId, user: userId });
      
      if (!codeSnippet) {
        return res.status(404).json({ message: 'Code snippet not found' });
      }
      
      res.status(200).json({
        success: true,
        data: codeSnippet
      });
    } catch (error) {
      console.error('Error fetching code snippet:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Delete a code snippet
  deleteCodeSnippet: async (req, res) => {
    try {
      const snippetId = req.params.id;
      const userId = req.user.id;
      
      const codeSnippet = await CodeSnippet.findOneAndDelete({ _id: snippetId, user: userId });
      
      if (!codeSnippet) {
        return res.status(404).json({ message: 'Code snippet not found' });
      }
      
      res.status(200).json({
        success: true,
        message: 'Code snippet deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting code snippet:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = codeGenController;