import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import AIChat from '@/components/shared/AIChat';
import { Sparkles, ArrowLeft, Github, Linkedin, Mail } from 'lucide-react';

const Layout: React.FC = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleReturnToHome = () => {
        navigate('/');
    };

    const currentView = location.pathname === '/about' ? 'about' : 'portfolio';

    return (
        <div className="min-h-screen pb-20 md:pb-0 md:pt-16 bg-white">
            {/* Mobile Top Header */}
            <div className="md:hidden flex items-center justify-between px-4 py-3 bg-white border-b-2 border-gray-100 sticky top-0 z-30">
                <button onClick={handleReturnToHome} className="flex items-center gap-1 group">
                    <ArrowLeft size={16} className="text-gray-400 group-hover:text-black transition-colors" />
                    <span className="text-xl font-black tracking-tighter">Dennis Mwangi. Mwangi</span>
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
                <Outlet />
            </main>
            <footer className="border-t-2 border-black px-6 bg-white">
                <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                        <p className="text-gray-500 max-w-xs text-sm">
                            Made with <span className="text-red-500">&hearts;</span> by Dennis Mwangi.
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href="mailto:dennis@example.com" className="p-2 hover:bg-gray-100 rounded-sm transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>
                </div>
            </footer>

            {/* Global Components */}
            <Navigation
                currentView={currentView}
                onNavigate={(view) => navigate(`/${view === 'portfolio' ? 'portfolio' : 'about'}`)}
                onOpenChat={() => setIsChatOpen(true)}
                onReturnToLanding={handleReturnToHome}
            />

            {/* AI Chat Overlay */}
            <AIChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
        </div>
    );
};

export default Layout;
