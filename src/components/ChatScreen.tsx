import React from 'react';
import { MessageCircle, Send, Code, Copy, Check, Terminal, Zap, Cpu, ArrowLeft } from 'lucide-react';
import { UserData } from '../types/UserData';

interface ChatScreenProps {
  userData: UserData;
  chatMessages: Array<{text: string, isUser: boolean, timestamp: number, code?: string}>;
  inputMessage: string;
  setInputMessage: React.Dispatch<React.SetStateAction<string>>;
  setCurrentScreen: (screen: string) => void;
  addMessage: (message: string, isUser?: boolean, code?: string) => void;
}

const ChatScreen: React.FC<ChatScreenProps> = ({ 
  userData, 
  chatMessages, 
  inputMessage, 
  setInputMessage, 
  setCurrentScreen, 
  addMessage 
}) => {
  const [copiedIndex, setCopiedIndex] = React.useState<number | null>(null);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;
    
    addMessage(inputMessage, true);
    
    // Enhanced AI response simulation with code examples
    setTimeout(() => {
      const responses = [
        {
          text: `Perfect! For ${userData.language || 'your language'}, here's a solution tailored to your ${userData.experience || 'skill level'}:`,
          code: userData.language === 'Python' ? 
            `# Here's a clean Python solution
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Optimized version with memoization
def fibonacci_memo(n, memo={}):
    if n in memo:
        return memo[n]
    if n <= 1:
        return n
    memo[n] = fibonacci_memo(n-1, memo) + fibonacci_memo(n-2, memo)
    return memo[n]

# Test it
print(fibonacci_memo(10))  # Output: 55` :
            `// Clean JavaScript solution
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Modern ES6+ approach with memoization
const fibonacciMemo = (() => {
    const cache = new Map();
    return function fib(n) {
        if (cache.has(n)) return cache.get(n);
        if (n <= 1) return n;
        const result = fib(n - 1) + fib(n - 2);
        cache.set(n, result);
        return result;
    };
})();

// Test it
console.log(fibonacciMemo(10)); // Output: 55`
        },
        {
          text: `Great question! Let me break this down step by step for someone with ${userData.experience || 'your experience'}:`,
          code: `// Step 1: Set up the basic structure
${userData.language === 'React' || userData.language === 'JavaScript' ? 
  `import React, { useState, useEffect } from 'react';

const MyComponent = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Your logic here
        console.log('Component mounted!');
        setLoading(false);
    }, []);
    
    return (
        <div>
            {loading ? 'Loading...' : 'Ready!'}
        </div>
    );
};

export default MyComponent;` :
  `# Clean Python approach
class DataProcessor:
    def __init__(self):
        self.data = []
        
    def process(self, input_data):
        """Process the input data efficiently"""
        try:
            # Your processing logic here
            result = [item * 2 for item in input_data]
            return result
        except Exception as e:
            print(f"Error processing: {e}")
            return []

# Usage
processor = DataProcessor()
result = processor.process([1, 2, 3, 4])
print(result)  # Output: [2, 4, 6, 8]`}`
        },
        {
          text: `Excellent! That's a common challenge in 2025. Here's the modern approach:`,
          code: `// Modern best practices for ${userData.language || 'your tech stack'}
${userData.language === 'React' ?
  `// Use custom hooks for reusable logic
import { useState, useCallback } from 'react';

const useApiCall = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('Network error');
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [url]);
    
    return { data, error, loading, fetchData };
};` :
  `# Modern Python with type hints and error handling
from typing import List, Optional
import asyncio
import aiohttp

async def fetch_data(url: str) -> Optional[dict]:
    """Async data fetching with proper error handling"""
    try:
        async with aiohttp.ClientSession() as session:
            async with session.get(url) as response:
                if response.status == 200:
                    return await response.json()
                else:
                    print(f"HTTP {response.status}: {await response.text()}")
                    return None
    except Exception as e:
        print(f"Error fetching data: {e}")
        return None

# Usage
data = asyncio.run(fetch_data("https://api.example.com/data"))`}`
        }
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      addMessage(randomResponse.text, false, randomResponse.code);
    }, 1000);
    
    setInputMessage('');
  };

  const copyToClipboard = async (text: string, index: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto p-6 flex flex-col h-screen">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900/80 via-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 mb-6 shadow-xl shadow-purple-500/10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-3 rounded-xl shadow-lg shadow-cyan-500/25">
                <Terminal className="w-7 h-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  CodeMentor Terminal
                </h2>
                <p className="text-gray-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  AI-powered coding assistance active
                </p>
              </div>
            </div>
            <button
              onClick={() => setCurrentScreen('dashboard')}
              className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 px-4 py-2 rounded-xl hover:bg-gray-800/50 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 group-hover:animate-pulse" />
              Dashboard
            </button>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 bg-gradient-to-br from-gray-900/60 via-slate-900/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 mb-6 overflow-y-auto shadow-xl shadow-purple-500/10">
          {chatMessages.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <div className="bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-lg shadow-cyan-500/25 animate-pulse">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">CodeMentor AI Ready</h3>
              <p className="mb-6 text-gray-300">Ask me anything about coding, debugging, or career prep!</p>
              
              <div className="bg-gradient-to-br from-gray-800/80 to-slate-800/80 rounded-2xl p-6 border border-gray-700/50 max-w-2xl mx-auto">
                <p className="text-cyan-400 font-bold mb-4 flex items-center justify-center gap-2">
                  <Zap className="w-5 h-5" />
                  Quick Commands
                </p>
                <div className="grid gap-3 text-left">
                  <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                    <p className="text-white font-medium">💻 "Write a React component for user authentication"</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                    <p className="text-white font-medium">🐛 "Debug this Python function" [paste your code]</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                    <p className="text-white font-medium">🧠 "Explain async/await in JavaScript"</p>
                  </div>
                  <div className="bg-gray-700/50 rounded-lg p-3 border border-gray-600/30">
                    <p className="text-white font-medium">🎯 "Mock interview: reverse a linked list"</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {chatMessages.map((message, index) => (
            <div key={index} className={`mb-6 flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-3xl ${
                message.isUser 
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white rounded-2xl rounded-br-md shadow-lg shadow-cyan-500/25' 
                  : 'bg-gradient-to-br from-gray-800/80 to-slate-800/80 text-gray-100 rounded-2xl rounded-bl-md border border-gray-700/50 shadow-lg'
              } px-6 py-4`}>
                <div className="whitespace-pre-line leading-relaxed">{message.text}</div>
                {message.code && (
                  <div className="mt-4 bg-black/80 rounded-xl p-4 relative border border-gray-600/50 shadow-inner">
                    <button
                      onClick={() => copyToClipboard(message.code!, index)}
                      className="absolute top-3 right-3 p-2 text-gray-400 hover:text-cyan-400 transition-colors rounded-lg hover:bg-gray-700/50"
                      title="Copy code"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-5 h-5 text-emerald-400" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <pre className="text-sm text-gray-300 overflow-x-auto pr-12">
                      <code className="font-mono">{message.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-gradient-to-r from-gray-900/80 via-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 shadow-xl shadow-purple-500/10">
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Ask CodeMentor anything... (code, debug, explain, interview prep)"
              className="flex-1 p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all backdrop-blur-sm font-mono"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <button
              onClick={handleSendMessage}
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <Send className="w-5 h-5" />
                <span className="hidden sm:inline">Execute</span>
              </div>
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <Zap className="w-3 h-3 text-yellow-400" />
              Pro tip: Paste your code for debugging, or ask for examples in {userData.language || 'any language'}
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              AI Online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatScreen;