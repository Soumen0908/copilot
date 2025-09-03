import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import Dashboard from './components/Dashboard';
import ChatScreen from './components/ChatScreen';
import { UserData } from './types/UserData';

const CodeMentor = () => {
  const [currentScreen, setCurrentScreen] = useState('welcome');
  const [userData, setUserData] = useState<UserData>({
    name: '',
    language: '',
    experience: '',
    goals: '',
    projectType: '',
    challenges: []
  });

  const [chatMessages, setChatMessages] = useState<Array<{text: string, isUser: boolean, timestamp: number, code?: string}>>([]);
  const [inputMessage, setInputMessage] = useState('');

  const addMessage = (message: string, isUser = false, code?: string) => {
    setChatMessages(prev => [...prev, { text: message, isUser, timestamp: Date.now(), code }]);
  };

  return (
    <div className="font-mono">
      {currentScreen === 'welcome' && (
        <WelcomeScreen 
          userData={userData}
          setUserData={setUserData}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'dashboard' && (
        <Dashboard 
          userData={userData}
          setCurrentScreen={setCurrentScreen}
          addMessage={addMessage}
        />
      )}
      {currentScreen === 'chat' && (
        <ChatScreen 
          userData={userData}
          chatMessages={chatMessages}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
          setCurrentScreen={setCurrentScreen}
          addMessage={addMessage}
        />
      )}
    </div>
  );
};

export default CodeMentor;