const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide your name'],
      trim: true
    },
    email: {
      type: String,
      required: [true, 'Please provide your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email']
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: 8,
      select: false
    },
    language: {
      type: String,
      default: ''
    },
    experience: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced', 'expert', ''],
      default: ''
    },
    goals: {
      type: String,
      default: ''
    },
    projectType: {
      type: String,
      default: ''
    },
    challenges: [{
      type: String
    }],
    codeSnippets: [{
      type: mongoose.Schema.ObjectId,
      ref: 'CodeSnippet'
    }],
    debuggingSessions: [{
      type: mongoose.Schema.ObjectId,
      ref: 'DebuggingSession'
    }],
    interviewSessions: [{
      type: mongoose.Schema.ObjectId,
      ref: 'InterviewSession'
    }]
  },
  {
    timestamps: true
  }
);

// Hash password before saving
userSchema.pre('save', async function(next) {
  // Only run this function if password was modified
  if (!this.isModified('password')) return next();

  // Hash the password with cost of 12
  this.password = await bcrypt.hash(this.password, 12);
  
  next();
});

// Method to check if password is correct
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model('User', userSchema);

module.exports = User;