import React, { useState, useRef, useEffect } from 'react';
import { Send, X, Loader2, Sparkles } from 'lucide-react';
import { generateRentalAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

interface AIChatProps {
  isOpen: boolean;
  onClose: () => void;
}

const AIChat: React.FC<AIChatProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'model',
      text: "Sasa! I'm Rentie. I know the Nairobi market. What are you looking for?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await generateRentalAdvice(userMsg.text, history);

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText || "Network error. Try again.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-end sm:justify-center bg-black/50 backdrop-blur-sm p-0 sm:p-4 fade-in">
      <div className="bg-white w-full sm:w-[400px] h-[90vh] sm:h-[600px] flex flex-col shadow-2xl border-t-2 sm:border-2 border-black sm:rounded-sm">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b-2 border-black bg-gray-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-black text-white flex items-center justify-center font-bold rounded-sm">
              <Sparkles size={16} />
            </div>
            <div>
              <h3 className="font-black text-lg leading-none">Rentie AI</h3>
              <p className="text-xs text-gray-500 font-bold uppercase mt-1">Assistant</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-gray-200 transition-colors border border-transparent hover:border-black rounded-sm">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[85%] px-4 py-3 text-sm font-medium border-2 ${
                  msg.role === 'user'
                    ? 'bg-black border-black text-white rounded-sm rounded-br-none'
                    : 'bg-white border-gray-200 text-black rounded-sm rounded-bl-none shadow-hard'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-gray-50 border-2 border-gray-100 rounded-sm px-4 py-3">
                <Loader2 className="animate-spin text-black" size={16} />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-gray-50 border-t-2 border-black">
          <div className="flex gap-2">
            <input
              type="text"
              className="flex-1 bg-white border-2 border-black px-3 py-2 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-black/20 rounded-sm"
              placeholder="Type a message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button
              onClick={handleSend}
              disabled={!inputValue.trim() || isLoading}
              className="px-4 bg-black text-white border-2 border-black hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIChat;