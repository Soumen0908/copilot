const mongoose = require('mongoose');

const codeSnippetSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Code snippet must belong to a user']
    },
    title: {
      type: String,
      required: [true, 'Code snippet must have a title'],
      trim: true
    },
    language: {
      type: String,
      required: [true, 'Please specify the programming language']
    },
    code: {
      type: String,
      required: [true, 'Code snippet must have content']
    },
    description: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      enum: ['generation', 'debugging'],
      required: [true, 'Please specify the type of code snippet']
    },
    debugInfo: {
      errors: [{
        line: Number,
        message: String,
        suggestion: String
      }],
      suggestions: [{
        type: String,
        description: String
      }]
    },
    generationPrompt: {
      type: String
    },
    generatedCode: {
      type: String
    },
    tags: [{
      type: String
    }]
  },
  {
    timestamps: true
  }
);

const CodeSnippet = mongoose.model('CodeSnippet', codeSnippetSchema);

module.exports = CodeSnippet;