import React from 'react';
import { Terminal, Zap, Code2, Cpu, Binary } from 'lucide-react';
import { UserData } from '../types/UserData';

interface WelcomeScreenProps {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setCurrentScreen: (screen: string) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ userData, setUserData, setCurrentScreen }) => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-6 pt-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="relative mb-8">
            <div className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full w-24 h-24 mx-auto flex items-center justify-center shadow-2xl shadow-cyan-500/25 animate-pulse">
              <Terminal className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full opacity-20 blur-xl animate-pulse"></div>
          </div>
          
          <h1 className="text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4 tracking-tight">
            CODE<span className="text-white">MENTOR</span>
          </h1>
          
          <div className="flex items-center justify-center gap-2 mb-6">
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
            <p className="text-2xl text-gray-300 font-light">
              Your <span className="text-cyan-400 font-semibold">AI-Powered</span> Coding Companion
            </p>
            <Zap className="w-6 h-6 text-yellow-400 animate-pulse" />
          </div>
          
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-900/40 to-emerald-900/40 backdrop-blur-sm rounded-full px-6 py-3 border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <p className="text-green-400 font-medium">🔒 Your code stays private • Session-only data</p>
          </div>
        </div>

        {/* Main Form */}
        <div className="bg-gradient-to-br from-gray-900/80 via-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 shadow-2xl shadow-purple-500/10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2 flex items-center justify-center gap-3">
              <Code2 className="w-8 h-8 text-cyan-400" />
              Initialize Your Coding Journey
            </h2>
            <p className="text-gray-400">Configure your personalized AI assistant</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-cyan-400 mb-2 flex items-center gap-2">
                <Binary className="w-4 h-4" />
                Developer Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white placeholder-gray-500 transition-all backdrop-blur-sm"
                value={userData.name}
                onChange={(e) => setUserData(prev => ({...prev, name: e.target.value}))}
              />
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-purple-400 mb-2 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                Primary Language
              </label>
              <select
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-white transition-all backdrop-blur-sm"
                value={userData.language}
                onChange={(e) => setUserData(prev => ({...prev, language: e.target.value}))}
              >
                <option value="" className="bg-gray-800">Select your main language</option>
                <option value="JavaScript" className="bg-gray-800">JavaScript</option>
                <option value="Python" className="bg-gray-800">Python</option>
                <option value="TypeScript" className="bg-gray-800">TypeScript</option>
                <option value="React" className="bg-gray-800">React</option>
                <option value="Node.js" className="bg-gray-800">Node.js</option>
                <option value="Java" className="bg-gray-800">Java</option>
                <option value="C++" className="bg-gray-800">C++</option>
                <option value="Go" className="bg-gray-800">Go</option>
                <option value="Rust" className="bg-gray-800">Rust</option>
                <option value="other" className="bg-gray-800">Other</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-blue-400 mb-2">Experience Level</label>
              <select
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white transition-all backdrop-blur-sm"
                value={userData.experience}
                onChange={(e) => setUserData(prev => ({...prev, experience: e.target.value}))}
              >
                <option value="" className="bg-gray-800">Select experience</option>
                <option value="beginner" className="bg-gray-800">Beginner (0-1 years)</option>
                <option value="intermediate" className="bg-gray-800">Intermediate (2-4 years)</option>
                <option value="advanced" className="bg-gray-800">Advanced (5+ years)</option>
                <option value="expert" className="bg-gray-800">Expert (10+ years)</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-emerald-400 mb-2">Project Type</label>
              <select
                className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 text-white transition-all backdrop-blur-sm"
                value={userData.projectType}
                onChange={(e) => setUserData(prev => ({...prev, projectType: e.target.value}))}
              >
                <option value="" className="bg-gray-800">What are you building?</option>
                <option value="web-app" className="bg-gray-800">Web Application</option>
                <option value="mobile-app" className="bg-gray-800">Mobile App</option>
                <option value="api" className="bg-gray-800">API/Backend</option>
                <option value="data-science" className="bg-gray-800">Data Science</option>
                <option value="game" className="bg-gray-800">Game Development</option>
                <option value="algorithm" className="bg-gray-800">Algorithm/DSA</option>
                <option value="ai-ml" className="bg-gray-800">AI/Machine Learning</option>
              </select>
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-semibold text-yellow-400 mb-2">Coding Mission</label>
            <textarea
              placeholder="What are you trying to achieve? (e.g., build a portfolio website, prepare for FAANG interviews, debug a React app, learn algorithms)"
              className="w-full p-4 bg-gray-800/50 border border-gray-600/50 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 h-32 text-white placeholder-gray-500 transition-all backdrop-blur-sm resize-none"
              value={userData.goals}
              onChange={(e) => setUserData(prev => ({...prev, goals: e.target.value}))}
            />
          </div>
          
          <button
            onClick={() => setCurrentScreen('dashboard')}
            className="w-full relative group overflow-hidden bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white py-6 px-8 rounded-2xl font-bold text-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center gap-3">
              <Terminal className="w-6 h-6" />
              Initialize CodeMentor AI
              <Zap className="w-6 h-6 animate-pulse" />
            </div>
          </button>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-6 hover:border-cyan-400/50 transition-all duration-300">
            <Code2 className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Smart Code Generation</h3>
            <p className="text-gray-400">AI-powered code writing in any language with best practices</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 backdrop-blur-sm rounded-2xl border border-purple-500/30 p-6 hover:border-purple-400/50 transition-all duration-300">
            <Zap className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Real-time Debugging</h3>
            <p className="text-gray-400">Instant bug detection and fix suggestions</p>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 backdrop-blur-sm rounded-2xl border border-emerald-500/30 p-6 hover:border-emerald-400/50 transition-all duration-300">
            <Terminal className="w-12 h-12 text-emerald-400 mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Interview Mastery</h3>
            <p className="text-gray-400">Mock interviews and coding challenge practice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;