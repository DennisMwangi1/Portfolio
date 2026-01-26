import React from 'react';
import { Home, User, MessageCircle } from 'lucide-react';
import { ViewState } from '@/types';

interface NavigationProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  onOpenChat: () => void;
  onReturnToLanding?: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentView, onNavigate, onOpenChat, onReturnToLanding }) => {
  return (
    <>
      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t-2 border-black flex justify-around items-center h-16 z-30">
        <button
          onClick={() => onNavigate('portfolio')}
          className={`flex flex-col items-center justify-center w-full h-full ${currentView === 'portfolio' ? 'bg-gray-100 text-black' : 'text-gray-400'}`}
        >
          <Home size={22} strokeWidth={2.5} />
        </button>

        <div className="relative -top-5">
          <button
            onClick={() => onOpenChat()}
            className="bg-black text-white p-3 rounded-full border-4 border-white shadow-lg active:scale-95 transition-transform"
          >
            <MessageCircle size={24} />
          </button>
        </div>

        <button
          onClick={() => onNavigate('about')}
          className={`flex flex-col items-center justify-center w-full h-full ${currentView === 'about' ? 'bg-gray-100 text-black' : 'text-gray-400'}`}
        >
          <User size={22} strokeWidth={2.5} />
        </button>
      </div>

      {/* Desktop Header Nav */}
      <div className="hidden md:flex fixed top-0 w-full bg-white z-50 px-8 py-3 justify-between items-center border-b-2 border-black">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={onReturnToLanding}
        >
          <span className="text-xl font-black tracking-tighter">Dennis.</span>
        </div>

        <div className="flex gap-8 text-sm font-bold">
          <button
            onClick={() => onNavigate('portfolio')}
            className={`hover:underline decoration-2 underline-offset-4 ${currentView === 'portfolio' ? 'text-black underline' : 'text-gray-500'}`}
          >
            Portfolio
          </button>
          <button
            onClick={() => onNavigate('about')}
            className={`hover:underline decoration-2 underline-offset-4 ${currentView === 'about' ? 'text-black underline' : 'text-gray-500'}`}
          >
            About
          </button>
        </div>

        <div className="flex gap-4">
          <button onClick={onOpenChat} className="flex items-center gap-2 px-4 py-2 border border-gray-200 hover:border-black rounded-sm text-sm font-bold transition-all">
            <MessageCircle size={16} /> Contact
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;