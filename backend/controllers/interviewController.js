const InterviewSession = require('../models/InterviewSession');

// Helper function to generate interview questions based on topic and difficulty
const generateInterviewQuestions = (topic, difficulty) => {
  // In a real implementation, this would use an AI service or a database of questions
  // For this example, we'll return mock questions based on topic and difficulty
  
  const questions = [];
  
  // Generate questions based on topic
  if (topic === 'JavaScript') {
    if (difficulty === 'beginner') {
      questions.push(
        { question: 'What is the difference between let, const, and var?', answer: 'var is function-scoped, while let and const are block-scoped. const cannot be reassigned after declaration.' },
        { question: 'Explain the concept of hoisting in JavaScript.', answer: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top of the current scope before code execution.' },
        { question: 'What is the DOM?', answer: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.' }
      );
    } else if (difficulty === 'intermediate') {
      questions.push(
        { question: 'Explain closures in JavaScript.', answer: 'A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment).' },
        { question: 'What is the event loop in JavaScript?', answer: 'The event loop is a programming construct that waits for and dispatches events or messages in a program.' },
        { question: 'Explain the concept of prototypal inheritance.', answer: 'Prototypal inheritance is a feature in JavaScript used to add methods and properties to objects. It is a method by which an object can inherit the properties and methods of another object.' }
      );
    } else if (difficulty === 'advanced') {
      questions.push(
        { question: 'Explain the differences between shallow and deep copying in JavaScript.', answer: 'Shallow copying creates a new object that stores the references of the original elements. Deep copying creates a new object and recursively copies all the elements from the original.' },
        { question: 'What are JavaScript generators and how do they work?', answer: 'Generators are functions that can be exited and later re-entered. Their context (variable bindings) will be saved across re-entrances.' },
        { question: 'Explain the concept of memoization and how it can be implemented in JavaScript.', answer: 'Memoization is an optimization technique that speeds up function calls by storing the results of expensive function calls and returning the cached result when the same inputs occur again.' }
      );
    }
  } else if (topic === 'React') {
    if (difficulty === 'beginner') {
      questions.push(
        { question: 'What is JSX?', answer: 'JSX is a syntax extension for JavaScript that looks similar to HTML and is used with React to describe what the UI should look like.' },
        { question: 'What is the difference between state and props?', answer: 'Props are passed to the component (similar to function parameters) while state is managed within the component (similar to variables declared within a function).' },
        { question: 'What is the virtual DOM?', answer: 'The virtual DOM is a programming concept where an ideal, or "virtual", representation of a UI is kept in memory and synced with the "real" DOM by a library such as ReactDOM.' }
      );
    } else if (difficulty === 'intermediate') {
      questions.push(
        { question: 'Explain the lifecycle methods in React.', answer: 'Lifecycle methods are special methods that automatically get called as your component achieves certain milestones. Common ones include componentDidMount, componentDidUpdate, and componentWillUnmount.' },
        { question: 'What are hooks in React?', answer: 'Hooks are functions that let you "hook into" React state and lifecycle features from function components.' },
        { question: 'Explain the concept of context in React.', answer: 'Context provides a way to pass data through the component tree without having to pass props down manually at every level.' }
      );
    } else if (difficulty === 'advanced') {
      questions.push(
        { question: 'Explain how to optimize performance in React applications.', answer: 'Performance optimization in React includes techniques like using React.memo for component memoization, using useCallback and useMemo hooks, implementing virtualization for long lists, and code splitting.' },
        { question: 'What are React Fiber and Concurrent Mode?', answer: 'React Fiber is a reimplementation of React\'s core algorithm. Concurrent Mode is a set of new features that help React apps stay responsive and gracefully adjust to the user\'s device capabilities and network speed.' },
        { question: 'Explain how to implement server-side rendering in React.', answer: 'Server-side rendering (SSR) involves rendering React components on the server instead of in the browser. This can be implemented using frameworks like Next.js or by manually setting up a Node.js server with ReactDOMServer.' }
      );
    }
  } else if (topic === 'Algorithms') {
    if (difficulty === 'beginner') {
      questions.push(
        { question: 'Explain the concept of time complexity.', answer: 'Time complexity is a measure of the amount of time an algorithm takes to complete as a function of the length of the input.' },
        { question: 'What is the difference between a stack and a queue?', answer: 'A stack is a LIFO (Last In, First Out) data structure, while a queue is a FIFO (First In, First Out) data structure.' },
        { question: 'Explain the concept of recursion.', answer: 'Recursion is a programming technique where a function calls itself to solve a problem.' }
      );
    } else if (difficulty === 'intermediate') {
      questions.push(
        { question: 'Explain the concept of dynamic programming.', answer: 'Dynamic programming is a method for solving complex problems by breaking them down into simpler subproblems and solving each subproblem only once, storing the solutions to avoid redundant calculations.' },
        { question: 'What is the difference between BFS and DFS?', answer: 'Breadth-First Search (BFS) explores all the vertices of a graph at the present depth before moving on to vertices at the next depth level. Depth-First Search (DFS) explores as far as possible along each branch before backtracking.' },
        { question: 'Explain the concept of greedy algorithms.', answer: 'Greedy algorithms make locally optimal choices at each step with the hope of finding a global optimum.' }
      );
    } else if (difficulty === 'advanced') {
      questions.push(
        { question: 'Explain the concept of NP-completeness.', answer: 'NP-complete problems are a class of decision problems that are verifiable in polynomial time but not known to be solvable in polynomial time.' },
        { question: 'What is the A* search algorithm and how does it work?', answer: 'A* is an informed search algorithm that finds the shortest path between nodes in a graph. It uses a heuristic function to guide its search and is complete and optimal if the heuristic is admissible.' },
        { question: 'Explain the concept of amortized analysis.', answer: 'Amortized analysis is a method for analyzing a sequence of operations to show that the average cost per operation is small, even though a single operation might be expensive.' }
      );
    }
  } else {
    // Default questions for any other topic
    questions.push(
      { question: `Tell me about your experience with ${topic}.`, answer: null },
      { question: `What projects have you worked on using ${topic}?`, answer: null },
      { question: `What are the main challenges you've faced when working with ${topic}?`, answer: null }
    );
  }
  
  // Generate a coding challenge based on difficulty
  let codingChallenge = null;
  
  if (difficulty === 'beginner') {
    codingChallenge = {
      title: 'FizzBuzz',
      description: 'Write a function that returns "Fizz" for numbers divisible by 3, "Buzz" for numbers divisible by 5, and "FizzBuzz" for numbers divisible by both 3 and 5. Otherwise, return the number itself.',
      sampleInput: '15',
      sampleOutput: 'FizzBuzz',
      difficulty: 'beginner'
    };
  } else if (difficulty === 'intermediate') {
    codingChallenge = {
      title: 'Valid Parentheses',
      description: 'Given a string containing just the characters \'(\', \')\'\', \'{\', \'}\'\', \'[\' and \']\'\', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order.',
      sampleInput: '()[]{}',
      sampleOutput: 'true',
      difficulty: 'intermediate'
    };
  } else if (difficulty === 'advanced') {
    codingChallenge = {
      title: 'LRU Cache',
      description: 'Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put. get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1. put(key, value) - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least recently used item before inserting a new item.',
      sampleInput: 'LRUCache cache = new LRUCache(2); cache.put(1, 1); cache.put(2, 2); cache.get(1); cache.put(3, 3); cache.get(2); cache.put(4, 4); cache.get(1); cache.get(3); cache.get(4);',
      sampleOutput: '1, -1, -1, 3, 4',
      difficulty: 'advanced'
    };
  }
  
  return {
    questions,
    codingChallenge
  };
};

// Controller methods for interview API endpoints
const interviewController = {
  // Start a new interview session
  startInterviewSession: async (req, res) => {
    try {
      const { topic, difficulty, title } = req.body;
      const userId = req.user.id;
      
      if (!topic || !difficulty) {
        return res.status(400).json({ message: 'Topic and difficulty are required' });
      }
      
      // Generate interview questions and coding challenge
      const { questions, codingChallenge } = generateInterviewQuestions(topic, difficulty);
      
      // Create a new interview session
      const interviewSession = new InterviewSession({
        user: userId,
        title: title || `${topic} Interview - ${difficulty} level`,
        topic,
        difficulty,
        questions,
        codingChallenge: codingChallenge ? [codingChallenge] : [],
        status: 'in_progress'
      });
      
      await interviewSession.save();
      
      res.status(201).json({
        success: true,
        data: interviewSession
      });
    } catch (error) {
      console.error('Error starting interview session:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get all interview sessions for a user
  getUserInterviewSessions: async (req, res) => {
    try {
      const userId = req.user.id;
      const interviewSessions = await InterviewSession.find({ user: userId })
        .sort({ createdAt: -1 });
      
      res.status(200).json({
        success: true,
        count: interviewSessions.length,
        data: interviewSessions
      });
    } catch (error) {
      console.error('Error fetching interview sessions:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Get a specific interview session
  getInterviewSession: async (req, res) => {
    try {
      const sessionId = req.params.id;
      const userId = req.user.id;
      
      const interviewSession = await InterviewSession.findOne({ _id: sessionId, user: userId });
      
      if (!interviewSession) {
        return res.status(404).json({ message: 'Interview session not found' });
      }
      
      res.status(200).json({
        success: true,
        data: interviewSession
      });
    } catch (error) {
      console.error('Error fetching interview session:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Submit answers for an interview session
  submitInterviewAnswers: async (req, res) => {
    try {
      const sessionId = req.params.id;
      const userId = req.user.id;
      const { answers, codingSolution } = req.body;
      
      const interviewSession = await InterviewSession.findOne({ _id: sessionId, user: userId });
      
      if (!interviewSession) {
        return res.status(404).json({ message: 'Interview session not found' });
      }
      
      if (interviewSession.status === 'completed') {
        return res.status(400).json({ message: 'This interview session is already completed' });
      }
      
      // In a real implementation, this would use an AI service to evaluate answers
      // For this example, we'll provide mock feedback
      
      // Update question answers
      if (answers && Array.isArray(answers)) {
        interviewSession.questions = interviewSession.questions.map((q, index) => {
          if (answers[index]) {
            return {
              ...q,
              userAnswer: answers[index],
              feedback: 'Good answer! You covered the key points.', // Mock feedback
              score: Math.floor(Math.random() * 5) + 1 // Random score between 1-5
            };
          }
          return q;
        });
      }
      
      // Update coding challenge solution
      if (codingSolution && interviewSession.codingChallenge.length > 0) {
        interviewSession.codingChallenge[0].userSolution = codingSolution;
        interviewSession.codingChallenge[0].feedback = 'Your solution works correctly for the given test cases.'; // Mock feedback
        interviewSession.codingChallenge[0].score = Math.floor(Math.random() * 5) + 1; // Random score between 1-5
      }
      
      // Calculate overall score
      const questionScores = interviewSession.questions
        .filter(q => q.score !== undefined)
        .map(q => q.score);
      
      const challengeScores = interviewSession.codingChallenge
        .filter(c => c.score !== undefined)
        .map(c => c.score);
      
      const allScores = [...questionScores, ...challengeScores];
      
      if (allScores.length > 0) {
        const totalScore = allScores.reduce((sum, score) => sum + score, 0);
        interviewSession.overallScore = Math.round((totalScore / allScores.length) * 20); // Scale to 0-100
      }
      
      // Generate overall feedback
      if (interviewSession.overallScore !== undefined) {
        if (interviewSession.overallScore >= 80) {
          interviewSession.feedback = 'Excellent performance! You demonstrated strong knowledge and problem-solving skills.';
        } else if (interviewSession.overallScore >= 60) {
          interviewSession.feedback = 'Good job! You showed solid understanding of the concepts with some areas for improvement.';
        } else if (interviewSession.overallScore >= 40) {
          interviewSession.feedback = 'Satisfactory performance. There are several areas where you could deepen your knowledge.';
        } else {
          interviewSession.feedback = 'You need more practice in this area. Focus on strengthening your fundamental understanding.';
        }
      }
      
      // Mark as completed
      interviewSession.status = 'completed';
      interviewSession.completedAt = Date.now();
      
      await interviewSession.save();
      
      res.status(200).json({
        success: true,
        data: interviewSession
      });
    } catch (error) {
      console.error('Error submitting interview answers:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  },
  
  // Delete an interview session
  deleteInterviewSession: async (req, res) => {
    try {
      const sessionId = req.params.id;
      const userId = req.user.id;
      
      const interviewSession = await InterviewSession.findOneAndDelete({ _id: sessionId, user: userId });
      
      if (!interviewSession) {
        return res.status(404).json({ message: 'Interview session not found' });
      }
      
      res.status(200).json({
        success: true,
        message: 'Interview session deleted successfully'
      });
    } catch (error) {
      console.error('Error deleting interview session:', error);
      res.status(500).json({ message: 'Server error', error: error.message });
    }
  }
};

module.exports = interviewController;