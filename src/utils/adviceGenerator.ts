import { UserData } from '../types/UserData';

export const generateCodingAdvice = (area: string, userData: UserData): string => {
  const currentYear = 2025;
  
  const advice = {
    'Code Generation': `Here's your personalized coding assistance for ${userData.language || 'programming'}:

💻 **Smart Code Generation:**
• Clean, readable code following ${userData.language || 'modern'} best practices
• Comments explaining complex logic
• Error handling and edge cases included
• Performance-optimized solutions

🎯 **For ${userData.experience || 'your level'}:**
${userData.experience === 'beginner' ? 
  '• Step-by-step explanations with each code block\n• Simple, clear examples to build understanding\n• Common pitfalls and how to avoid them' :
  '• Advanced patterns and optimization techniques\n• Code architecture recommendations\n• Performance analysis and improvements'}

🔥 **${userData.language || 'Language'} Specialties:**
${userData.language === 'React' || userData.language === 'JavaScript' ? 
  '• Modern React patterns (hooks, context, custom hooks)\n• TypeScript integration\n• Performance optimization with useMemo/useCallback' :
  '• Language-specific best practices\n• Framework recommendations\n• Modern tooling and workflows'}

**Next Step:** Share your specific coding challenge and I'll write the solution!`,

    'Debugging Help': `Let's squash those bugs in your ${userData.language || 'code'}! 🐛➡️✨

🔍 **Debug Strategy for ${currentYear}:**
1. **Share your code** - Paste the problematic code snippet
2. **Describe the issue** - What's happening vs. what should happen?
3. **Error messages** - Include any error logs or console output

🛠️ **Common ${userData.language || 'Programming'} Issues:**
${userData.language === 'JavaScript' || userData.language === 'React' ? 
  '• Async/await timing issues\n• State management bugs\n• Event handling problems\n• API integration errors' :
  userData.language === 'Python' ?
  '• Indentation errors\n• Variable scope issues\n• Import/module problems\n• Type-related bugs' :
  '• Logic errors\n• Syntax issues\n• Performance bottlenecks\n• Integration problems'}

💡 **Debug Tools I'll Teach:**
• Console logging strategies
• Breakpoint debugging
• Error handling patterns
• Testing approaches

**Ready to debug?** Paste your code and let's fix it together!`,

    'Interview Prep': `Let's ace your ${userData.language || 'tech'} coding interviews! 🎯

🏆 **${currentYear} Interview Prep Plan:**
• **Week 1-2:** Master fundamentals (arrays, strings, hashmaps)
• **Week 3-4:** Trees, graphs, and dynamic programming
• **Week 5-6:** System design and behavioral questions
• **Week 7+:** Company-specific practice

🎤 **Mock Interview Formats:**
1. **Coding Challenge** - 45-minute problem solving
2. **System Design** - Scalable architecture discussion
3. **Behavioral** - Leadership and collaboration scenarios

🔥 **${userData.language || 'Language'}-Specific Prep:**
${userData.language === 'Python' ? 
  '• List comprehensions and generators\n• Object-oriented design patterns\n• Data structures implementation\n• Algorithm complexity analysis' :
  userData.language === 'JavaScript' || userData.language === 'React' ?
  '• Asynchronous JavaScript patterns\n• React component optimization\n• Frontend system design\n• DOM manipulation and events' :
  '• Language-specific algorithms\n• Framework knowledge\n• Code optimization\n• Best practices and patterns'}

**Practice Problem:** Ready for a coding challenge? Type "start interview" to begin!`,

    'Algorithm Practice': `Master algorithms and data structures for ${userData.language || 'your language'}! 📚

📊 **Learning Path for ${userData.experience || 'Your Level'}:**
${userData.experience === 'beginner' ?
  '• **Foundation:** Arrays, strings, basic loops\n• **Next:** Hash tables, two pointers\n• **Then:** Binary search, simple recursion' :
  '• **Advanced:** Dynamic programming, graph algorithms\n• **Expert:** Segment trees, advanced DP\n• **Master:** Competitive programming patterns'}

🎯 **Algorithm Categories:**
• **Sorting & Searching** - Quick sort, binary search
• **Dynamic Programming** - Memoization, tabulation
• **Graph Algorithms** - DFS, BFS, shortest paths
• **Tree Traversals** - Inorder, preorder, postorder
• **String Processing** - Pattern matching, parsing

💻 **Practice Resources:**
• **LeetCode** - 3 problems daily (easy→medium→hard)
• **HackerRank** - Language-specific challenges
• **CodeSignal** - Company interview simulations

**Challenge:** Want to solve a ${userData.experience || 'level-appropriate'} algorithm problem right now?`,

    'Concept Explanation': `Let's demystify ${userData.language || 'programming'} concepts! 🧠

🔍 **Explanation Style for ${userData.experience || 'Your Level'}:**
${userData.experience === 'beginner' ?
  '• **Visual analogies** - Compare code concepts to real-world examples\n• **Step-by-step breakdown** - No assumptions about prior knowledge\n• **Interactive examples** - Code you can run and modify' :
  '• **Deep technical details** - Implementation specifics\n• **Performance implications** - Time/space complexity\n• **Advanced patterns** - Design principles and architecture'}

📚 **Popular ${currentYear} Concepts:**
${userData.language === 'React' || userData.language === 'JavaScript' ?
  '• **React Server Components** - Latest rendering patterns\n• **State Management** - Redux Toolkit, Zustand, Context\n• **Performance** - Code splitting, lazy loading\n• **TypeScript** - Advanced type patterns' :
  userData.language === 'Python' ?
  '• **Async Programming** - asyncio, concurrent futures\n• **Type Hints** - MyPy, Pydantic validation\n• **Data Classes** - Modern Python patterns\n• **Decorators** - Function enhancement patterns' :
  '• **Design Patterns** - Singleton, Observer, Factory\n• **Memory Management** - Optimization techniques\n• **Concurrency** - Threads, processes, async\n• **Testing** - Unit testing, TDD principles'}

**What concept confuses you?** I'll explain it clearly with code examples!`,

    'Code Optimization': `Let's supercharge your ${userData.language || 'code'} performance! ⚡

🚀 **Optimization Strategy:**
1. **Measure first** - Profile before optimizing
2. **Target bottlenecks** - Focus on the 80/20 rule
3. **Maintain readability** - Fast but maintainable code
4. **Test thoroughly** - Ensure correctness

⚡ **${userData.language || 'Language'} Performance Tips:**
${userData.language === 'JavaScript' || userData.language === 'React' ?
  '• **Bundle optimization** - Code splitting, tree shaking\n• **React optimization** - useMemo, useCallback, React.memo\n• **DOM manipulation** - Virtual DOM best practices\n• **Network optimization** - Lazy loading, caching' :
  userData.language === 'Python' ?
  '• **Data structures** - Use sets for lookups, deque for queues\n• **List comprehensions** - Faster than loops\n• **Built-in functions** - map(), filter(), reduce()\n• **Caching** - functools.lru_cache for expensive calls' :
  '• **Algorithm complexity** - Choose optimal data structures\n• **Memory usage** - Avoid memory leaks\n• **Compiler optimizations** - Language-specific tricks\n• **Profiling tools** - Measure and optimize'}

🔧 **Modern Tools (${currentYear}):**
• **Profilers** - Chrome DevTools, Python cProfile
• **Linters** - ESLint, Pylint for code quality
• **Formatters** - Prettier, Black for consistency

**Send me your code** and I'll show you specific optimizations!`
  };

  return advice[area] || "I'm here to help with all your coding needs! What specific challenge are you facing?";
};