const mongoose = require('mongoose');

const debuggingSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Debugging session must belong to a user']
    },
    title: {
      type: String,
      required: [true, 'Debugging session must have a title'],
      trim: true
    },
    language: {
      type: String,
      required: [true, 'Please specify the programming language']
    },
    code: {
      type: String,
      required: [true, 'Debugging session must have code content']
    },
    error: {
      type: String,
      default: ''
    },
    analysis: {
      type: String,
      default: ''
    },
    suggestions: [{
      type: String
    }],
    resolved: {
      type: Boolean,
      default: false
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

// Update the updatedAt field on save
debuggingSessionSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const DebuggingSession = mongoose.model('DebuggingSession', debuggingSessionSchema);

module.exports = DebuggingSession;