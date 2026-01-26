import React from 'react';
import { Project } from '@/types';
import { ChevronLeft, Github, ExternalLink, Star } from 'lucide-react';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white overflow-y-auto pb-24 fade-in">
      {/* Sticky Utilitarian Header */}
      <div className="sticky top-0 left-0 w-full z-20 flex justify-between items-center p-4 bg-white border-b-2 border-black">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm font-bold hover:bg-gray-100 px-3 py-2 rounded-sm transition-colors"
        >
          <ChevronLeft size={20} /> Back
        </button>
        <div className="font-bold text-sm tracking-tight truncate max-w-[150px]">
          {project.title}
        </div>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-100 rounded-sm"
        >
          <Github size={20} />
        </a>
      </div>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto">
        {/* Images */}
        <div className="w-full aspect-video bg-gray-200">
          <img src={project.imageUrl} className="w-full h-full object-cover" alt="Main" />
        </div>

        {/* Gallery Strip */}
        {project.images && project.images.length > 1 && (
          <div className="flex overflow-x-auto gap-1 p-1 no-scrollbar">
            {project.images.map((img, idx) => (
              <img key={idx} src={img} className="h-24 w-32 object-cover border border-gray-100 flex-none" alt={`View ${idx}`} />
            ))}
          </div>
        )}

        <div className="px-6 py-8">
          {/* Header Info */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <div className="inline-block bg-black text-white text-xs font-bold px-2 py-1 mb-3">
              {project.category.toUpperCase()}
            </div>
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-black text-black flex-1">{project.title}</h1>
              <div className="flex items-center gap-2 ml-4 flex-shrink-0">
                <Star size={20} className="fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-bold text-gray-700">{project.stars}</span>
              </div>
            </div>
            <p className="text-gray-600 font-medium mb-4">
              Created {project.createdAt}
            </p>

            <div className="flex gap-4">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-900 hover:bg-black text-white px-6 py-3 font-bold rounded-sm transition-colors flex items-center gap-2"
              >
                <Github size={18} /> View Code
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-100 hover:bg-gray-200 text-gray-900 px-6 py-3 font-bold rounded-sm transition-colors flex items-center gap-2"
                >
                  <ExternalLink size={18} /> Live Demo
                </a>
              )}
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-3">About</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>

          {/* Technologies Grid */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-3">Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.technologies.map(tech => (
                <div
                  key={tech}
                  className="bg-gray-100 border-2 border-gray-200 rounded-sm p-3 text-sm font-medium text-gray-900 text-center"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="mb-8">
            <h3 className="font-bold text-lg mb-3">Highlights</h3>
            <ul className="space-y-2">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-black font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
