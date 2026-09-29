import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, User, Sparkles, RefreshCw } from 'lucide-react';
import {
  DATA_PROFILE,
  DATA_CAPABILITIES,
  DATA_FEATURED,
  DATA_EXPERIENCE,
} from '../../data/mockData';
import './AiChatWidget.css';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

const QUICK_PROMPTS = [
  '⚡ Tech Stack',
  '🚀 Top Projects',
  '💼 Experience',
  '📬 How to contact?',
];

export const AiChatWidget: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init',
      sender: 'ai',
      text: `Hi! I'm Harsh's AI assistant. Ask me anything about his technical stack, projects, or background!`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const generateAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('stack') || q.includes('skill') || q.includes('technology') || q.includes('tech')) {
      const topSkills = DATA_CAPABILITIES.map((c) => `${c.name}: ${c.skills.slice(0, 3).join(', ')}`).join(' | ');
      return `Harsh specializes in Python, Django REST Framework, React, and TypeScript. Core toolkit: ${topSkills}.`;
    }

    if (q.includes('project') || q.includes('work') || q.includes('portfolio') || q.includes('top')) {
      const featuredTitles = DATA_FEATURED.map((p) => p.title).join(', ');
      return `Harsh has delivered 15+ web applications. Flagship projects include: ${featuredTitles}. Check out the Projects section below for live demos!`;
    }

    if (q.includes('experience') || q.includes('job') || q.includes('career') || q.includes('role')) {
      const latestExp = DATA_EXPERIENCE[0];
      return `Harsh has ${DATA_PROFILE.experience_years} years of software engineering experience. Currently serving as ${latestExp.role} at ${latestExp.company} (${latestExp.location}).`;
    }

    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('reach')) {
      return `You can reach Harsh directly via email at ${DATA_PROFILE.email} or connect on LinkedIn at ${DATA_PROFILE.linkedin}.`;
    }

    if (q.includes('hi') || q.includes('hello') || q.includes('hey')) {
      return `Hello! How can I help you learn more about Harsh's engineering background today?`;
    }

    return `Harsh is a Full-Stack Engineer specializing in Django REST API backends, React/TypeScript frontends, and cloud deployment pipelines. Feel free to ask about his skills, projects, or contact details!`;
  };

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiReplyText = generateAnswer(userText);
      const aiMsg: Message = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: aiReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        id: `init-${Date.now()}`,
        sender: 'ai',
        text: `Chat reset. Ask me anything about Harsh's skills or projects!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  return (
    <div className="ai-chat-widget surface-card">
      <div className="ai-chat-header">
        <div className="ai-chat-title">
          <div className="ai-bot-avatar">
            <Bot size={18} />
          </div>
          <div>
            <h4>Harsh.ai Assistant</h4>
            <p className="ai-status">
              <span className="live-dot" /> Online · Instant response
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleReset}
          className="ai-reset-btn"
          title="Reset Conversation"
          aria-label="Reset Conversation"
        >
          <RefreshCw size={14} />
        </button>
      </div>

      <div className="ai-chat-messages" ref={messagesContainerRef}>
        {messages.map((msg) => (
          <div key={msg.id} className={`chat-bubble-row ${msg.sender}`}>
            <div className="chat-avatar">
              {msg.sender === 'ai' ? <Bot size={14} /> : <User size={14} />}
            </div>
            <div className="chat-bubble">
              <p>{msg.text}</p>
              <span className="chat-time">{msg.time}</span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="chat-bubble-row ai">
            <div className="chat-avatar">
              <Bot size={14} />
            </div>
            <div className="chat-bubble typing">
              <span className="dot-pulse" />
              <span className="dot-pulse" />
              <span className="dot-pulse" />
            </div>
          </div>
        )}
      </div>

      <div className="ai-quick-prompts">
        {QUICK_PROMPTS.map((prompt) => (
          <button
            key={prompt}
            type="button"
            className="prompt-chip"
            onClick={() => handleSend(prompt.replace(/^[^\s]+\s*/, ''))}
          >
            <Sparkles size={11} className="chip-sparkle" /> {prompt}
          </button>
        ))}
      </div>

      <form
        className="ai-chat-input-row"
        onSubmit={(e) => {
          e.preventDefault();
          handleSend(input);
        }}
      >
        <input
          type="text"
          placeholder="Ask AI about Harsh..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          aria-label="Ask AI about Harsh"
        />
        <button type="submit" className="ai-send-btn" aria-label="Send Message" disabled={!input.trim()}>
          <Send size={15} />
        </button>
      </form>
    </div>
  );
};
