import React, { useState } from 'react';
import { ViewState } from './types';
import Navigation from './src/components/Navigation';
import AIChat from './src/components/AIChat';
import LandingPage from './src/components/LandingPage';
import About from './src/components/About';
import Portfolio from './src/components/Portfolio';
import { Sparkles, ArrowLeft } from 'lucide-react';

const App: React.FC = () => {
  // Application Mode: 'landing' or 'app'
  const [viewMode, setViewMode] = useState<'landing' | 'app'>('landing');

  const [currentView, setCurrentView] = useState<ViewState>('portfolio');
  const [isChatOpen, setIsChatOpen] = useState(false);

  // Handlers
  const handleEnterApp = () => {
    setViewMode('app');
    window.scrollTo(0, 0);
  };

  const handleReturnToLanding = () => {
    setViewMode('landing');
    setCurrentView('portfolio');
    window.scrollTo(0, 0);
  };

  const handleNavigate = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  // If in Landing Mode, render LandingPage
  if (viewMode === 'landing') {
    return <LandingPage onEnterApp={handleEnterApp} />;
  }

  // Otherwise render the Main App
  return (
    <div className="min-h-screen pb-20 md:pb-0 md:pt-16 bg-white">
      {/* Mobile Top Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b-2 border-gray-100 sticky top-0 z-30">
        <button onClick={handleReturnToLanding} className="flex items-center gap-1 group">
          <ArrowLeft size={16} className="text-gray-400 group-hover:text-black transition-colors" />
          <span className="text-xl font-black tracking-tighter">Dennis.</span>
        </button>
        <button
          onClick={() => setIsChatOpen(true)}
          className="p-2 border border-gray-200 rounded-sm text-black hover:bg-gray-50"
        >
          <Sparkles size={18} />
        </button>
      </div>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto min-h-screen">
        {currentView === 'portfolio' && (
          <Portfolio />
        )}

        {currentView === 'about' && (
          <About />
        )}
      </main>

      {/* Global Components */}
      <Navigation
        currentView={currentView}
        onNavigate={handleNavigate}
        onOpenChat={() => setIsChatOpen(true)}
        onReturnToLanding={handleReturnToLanding}
      />

      {/* AI Chat Overlay */}
      <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default App;