import React, { useState } from 'react';
import { ExternalLink, Lightbulb, Target, TrendingUp, X } from 'lucide-react';
import { projects, CaseStudy } from '@/lib/utils';
import DomeGallery from '@/components/DomeGallery';
import TrueFocus from '@/components/TrueFocus';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<CaseStudy | null>(null);

  const handleProjectSelect = (project: CaseStudy | null) => {
    setSelectedProject(project);
  };

  return (
    <div className="h-screen bg-white overflow-hidden relative">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-4">
        <div
          className="text-center mb-0 animate-fade-in"
        >
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight">
            <TrueFocus
              sentence="Featured Projects"
              manualMode={false}
              blurAmount={6.5}
              borderColor="#030303"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Interactive showcase of digital solutions delivered across Africa. Click any project to explore the full case study.
          </p>
        </div>
      </div>

      {/* Left Side Panel - Problem & Client Info */}
      <div
        className={`fixed left-0 top-1/2 -translate-y-1/4 z-50 transition-all duration-500 ease-out ${selectedProject ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        style={{ maxWidth: '320px', pointerEvents: selectedProject ? 'auto' : 'none' }}
      >
        <div className="ml-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Gradient Header */}
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Target className="w-5 h-5 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-white/80">The Challenge</span>
            </div>
            <h3 className="text-2xl font-black text-white leading-tight">
              {selectedProject?.clientName}
            </h3>
          </div>

          {/* Problem Content */}
          <div className="p-6">
            {/* Project Name */}
            <h4 className="text-lg font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100">
              {selectedProject?.clientName}
            </h4>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Problem Statement</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProject?.problem}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Panel - Solution & Outcome */}
      <div
        className={`fixed right-0 top-1/2 -translate-y-1/4 z-50 transition-all duration-500 ease-out ${selectedProject ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        style={{ maxWidth: '320px', pointerEvents: selectedProject ? 'auto' : 'none' }}
      >
        <div className="mr-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Solution Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Our Solution</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProject?.solution}
                </p>
              </div>
            </div>
          </div>

          {/* Outcome Section */}
          <div className="p-6 bg-gradient-to-br from-emerald-50 to-teal-50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 mb-2 block">The Results</span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {selectedProject?.outcome}
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="p-4 bg-white border-t border-gray-100">
            <a
              href={selectedProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Gallery */}
      <div className="w-full h-[70vh] min-h-[600px] relative overflow-hidden">
        <DomeGallery
          projects={projects}
          grayscale={false}
          openedImageWidth="900px"
          openedImageHeight="600px"
          openedImageBorderRadius="24px"
          onProjectSelect={handleProjectSelect}
        />
      </div>
    </div>
  );
};

export default Portfolio;
