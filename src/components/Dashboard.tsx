import React from 'react';
import { MessageCircle, Code, Bug, Users, Trophy, BookOpen, GitBranch, Zap, Target, Cpu, Binary, Rocket } from 'lucide-react';
import { UserData } from '../types/UserData';
import { codingAreas } from '../data/codingAreas';
import { generateCodingAdvice } from '../utils/adviceGenerator';

interface DashboardProps {
  userData: UserData;
  setCurrentScreen: (screen: string) => void;
  addMessage: (message: string, isUser?: boolean, code?: string) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userData, setCurrentScreen, addMessage }) => {
  const currentYear = 2025;

  const handleAreaClick = (area: any) => {
    addMessage(`I'd like help with ${area.title}`, true);
    const advice = generateCodingAdvice(area.title, userData);
    addMessage(advice, false);
    setCurrentScreen('chat');
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      <div className="absolute top-60 right-16 w-1 h-1 bg-purple-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></div>

      <div className="relative z-10 max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="bg-gradient-to-r from-gray-900/80 via-slate-900/80 to-gray-900/80 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 mb-8 shadow-2xl shadow-purple-500/10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full w-16 h-16 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Welcome back, {userData.name || 'Developer'}!
                  </h1>
                  <div className="flex items-center gap-2 mt-2">
                    <Binary className="w-4 h-4 text-cyan-400" />
                    <p className="text-gray-400">
                      AI-powered assistance for {userData.language || 'programming'} • {currentYear}
                    </p>
                  </div>
                </div>
              </div>
              {userData.goals && (
                <div className="bg-gradient-to-r from-blue-900/40 to-purple-900/40 rounded-xl p-4 border border-blue-500/30">
                  <p className="text-blue-400 font-medium">🎯 Mission: {userData.goals}</p>
                </div>
              )}
            </div>
            <button
              onClick={() => setCurrentScreen('chat')}
              className="group relative overflow-hidden bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <MessageCircle className="w-6 h-6" />
                Launch CodeMentor
                <Rocket className="w-5 h-5 group-hover:animate-pulse" />
              </div>
            </button>
          </div>
        </div>

        {/* Coding Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {codingAreas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-gradient-to-br from-gray-900/60 via-slate-900/60 to-gray-900/60 backdrop-blur-xl rounded-2xl border border-gray-700/50 p-6 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              onClick={() => handleAreaClick(area)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-br from-cyan-500 to-purple-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                    {area.icon}
                  </div>
                  <h3 className="font-bold text-xl text-white group-hover:text-cyan-400 transition-colors">
                    {area.title}
                  </h3>
                </div>
                <p className="text-gray-400 mb-4 leading-relaxed">{area.desc}</p>
                <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                  <span>Initialize Protocol</span>
                  <Zap className="w-4 h-4 group-hover:animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mission Control */}
        <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 rounded-3xl text-white p-8 shadow-2xl shadow-purple-500/20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          
          <div className="relative">
            <div className="flex items-center gap-3 mb-4">
              <Target className="w-8 h-8" />
              <h2 className="text-2xl font-black">Mission Control Center</h2>
            </div>
            <p className="text-xl opacity-90 mb-6 leading-relaxed">
              {userData.goals || "Ready to define your coding objectives and build something extraordinary!"}
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setCurrentScreen('chat')}
                className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-bold hover:bg-white/30 transition-all duration-300 hover:scale-105 border border-white/20"
              >
                🎯 Create Coding Plan
              </button>
              <button
                onClick={() => {
                  addMessage("Start a new coding project with me!", true);
                  addMessage("🚀 Exciting! Let's build something amazing together. What type of project interests you?\n\n**Quick Start Options:**\n• **React App** - Modern web application\n• **Python Script** - Automation or data analysis\n• **REST API** - Backend service\n• **Algorithm** - Data structures practice\n• **Mobile App** - Cross-platform development\n\nOr describe your own idea! I'll provide step-by-step guidance, code examples, and debug any issues along the way.", false);
                  setCurrentScreen('chat');
                }}
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-bold hover:from-emerald-400 hover:to-cyan-400 transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25"
              >
                🚀 Launch New Project
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;