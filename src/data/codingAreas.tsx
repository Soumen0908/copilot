import React from 'react';
import { Code, Bug, Users, Trophy, BookOpen, GitBranch, Zap, Target, Cpu, Binary, Rocket, Brain } from 'lucide-react';

export const codingAreas = [
  { 
    icon: <Code className="w-7 h-7 text-white" />, 
    title: 'Code Generation', 
    desc: 'AI-powered code writing in any language with best practices and optimization' 
  },
  { 
    icon: <Bug className="w-7 h-7 text-white" />, 
    title: 'Debug Assistant', 
    desc: 'Real-time bug detection and intelligent fix suggestions' 
  },
  { 
    icon: <Trophy className="w-7 h-7 text-white" />, 
    title: 'Interview Mastery', 
    desc: 'Mock interviews, coding challenges, and system design practice' 
  },
  { 
    icon: <Brain className="w-7 h-7 text-white" />, 
    title: 'Algorithm Trainer', 
    desc: 'Master data structures and algorithms with interactive learning' 
  },
  { 
    icon: <BookOpen className="w-7 h-7 text-white" />, 
    title: 'Concept Explainer', 
    desc: 'Deep-dive explanations of complex programming concepts' 
  },
  { 
    icon: <Rocket className="w-7 h-7 text-white" />, 
    title: 'Performance Optimizer', 
    desc: 'Code optimization, performance analysis, and best practices' 
  }
];