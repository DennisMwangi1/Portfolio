import React, { useState } from 'react';
import { ExternalLink, Lightbulb, Target, TrendingUp, X } from 'lucide-react';
import { projects, Project } from '@/lib/utils';
import DomeGallery from '@/components/DomeGallery';
import TrueFocus from '@/components/TrueFocus';

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleProjectSelect = (project: Project | null) => {
    setSelectedProject(project);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden relative">
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
        className={`fixed left-0 top-1/2 -translate-y-1/4 z-50 transition-all duration-500 ease-out hidden md:block ${selectedProject ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
          }`}
        style={{ maxWidth: '320px', pointerEvents: selectedProject ? 'auto' : 'none' }}
      >
        <div className="ml-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Gradient Header */}
          <div className=" p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Target className="w-5 h-5 text-black" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-black/80">The Challenge</span>
            </div>
            <h3 className="text-2xl font-black text-black leading-tight">
              {selectedProject?.clientName}
            </h3>
          </div>

          {/* Problem Content */}
          <div className="p-6">

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
        className={`fixed right-0 top-1/2 -translate-y-1/4 z-50 transition-all duration-500 ease-out hidden md:block ${selectedProject ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
          }`}
        style={{ maxWidth: '320px', pointerEvents: selectedProject ? 'auto' : 'none' }}
      >
        <div className="mr-6 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Solution Section */}
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-5 h-5 text-black" />
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
                <TrendingUp className="w-5 h-5 text-black" />
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
          {selectedProject?.liveUrl ? (
            <a
              href={selectedProject?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300"
            >
              <span>View Live Project</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <p className="text-center text-gray-500 text-sm p-4">Proprietary project can be viewed upon request</p>
          )}
        </div>
      </div>

      {/* Interactive Gallery (Desktop/Tablet) */}
      <div className="hidden md:block w-full h-[70vh] min-h-[600px] relative overflow-hidden">
        <DomeGallery
          projects={projects}
          grayscale={false}
          openedImageWidth="min(90vw, 900px)"
          openedImageHeight="min(60vh, 600px)"
          openedImageBorderRadius="24px"
          onProjectSelect={handleProjectSelect}
        />
      </div>

      {/* Mobile Project Cards */}
      <div className="md:hidden px-4 pb-10">
        <div className="grid gap-6">
          {projects.map((project) => (
            <div
              key={project.clientName}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
            >
              <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.clientName}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="p-5 space-y-5">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-2">Client</span>
                  <h3 className="text-xl font-black text-gray-900 leading-tight">
                    {project.clientName}
                  </h3>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 block">Problem</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.problem}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Lightbulb className="w-4 h-4 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 block">Solution</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <TrendingUp className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1 block">Results</span>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.outcome}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-gray-100">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300"
                  >
                    <span>View Live Project</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <p className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-black hover:bg-gray-800 text-white font-bold rounded-xl transition-all duration-300">Proprietary project can be viewed upon request</p>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
