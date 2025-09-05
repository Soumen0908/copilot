const mongoose = require('mongoose');

const interviewSessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      required: [true, 'Interview session must belong to a user']
    },
    title: {
      type: String,
      required: [true, 'Interview session must have a title'],
      trim: true
    },
    difficulty: {
      type: String,
      enum: ['easy', 'medium', 'hard'],
      default: 'medium'
    },
    topic: {
      type: String,
      required: [true, 'Please specify the interview topic']
    },
    questions: [{
      question: String,
      answer: String,
      userResponse: String,
      feedback: String,
      score: Number
    }],
    codingChallenges: [{
      title: String,
      description: String,
      difficulty: String,
      starterCode: String,
      userSolution: String,
      expectedOutput: String,
      feedback: String,
      passed: Boolean
    }],
    overallScore: {
      type: Number,
      default: 0
    },
    feedback: {
      type: String,
      default: ''
    },
    completed: {
      type: Boolean,
      default: false
    },
    duration: {
      type: Number,  // in minutes
      default: 0
    }
  },
  {
    timestamps: true
  }
);

const InterviewSession = mongoose.model('InterviewSession', interviewSessionSchema);

module.exports = InterviewSession;