import React from 'react';
import { Project } from '@/types';
import { Github, Star, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div
      className="bg-white border border-gray-200 md:border-2 md:border-transparent md:hover:border-black transition-all cursor-pointer pb-2 group"
      onClick={() => onClick(project)}
    >
      {/* Image Container - Fixed Aspect Ratio */}
      <div className="relative aspect-[4/3] w-full bg-gray-100 overflow-hidden mb-3">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1.5 m-2">
          {project.category}
        </div>
        {project.featured && (
          <div className="absolute top-0 left-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 m-2">
            Featured
          </div>
        )}
      </div>

      {/* Content */}
      <div className="px-3 md:px-0">
        <div className="flex justify-between items-start mb-1">
          <div className="flex flex-col flex-1">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-1 group-hover:underline decoration-1 underline-offset-2">
              {project.title}
            </h3>
            <span className="text-xs font-medium text-gray-500 mt-0.5">
              {project.createdAt}
            </span>
          </div>
          <div className="flex items-center gap-1 ml-2 flex-shrink-0">
            <Star size={14} className="fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-bold text-gray-700">{project.stars}</span>
          </div>
        </div>

        <p className="text-xs text-gray-600 line-clamp-2 mb-3">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 mb-3">
          {project.technologies.slice(0, 3).map(tech => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded-sm border border-gray-200"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-gray-500 text-xs font-medium px-2 py-1">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Action Bar */}
        <div className="flex gap-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-900 hover:bg-black text-white text-xs font-bold py-2 px-3 rounded-sm transition-colors flex items-center justify-center gap-1"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} /> Code
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-none bg-gray-100 hover:bg-gray-200 text-gray-900 p-2 rounded-sm transition-colors"
              onClick={(e) => e.stopPropagation()}
              aria-label="Live Demo"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
