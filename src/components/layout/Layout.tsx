import React, { useState } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import AIChat from '@/components/shared/AIChat';
import { Sparkles, ArrowLeft } from 'lucide-react';

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
                <Outlet />
            </main>

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
