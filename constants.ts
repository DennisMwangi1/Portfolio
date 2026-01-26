import { Project } from "./types";

export const TECHNOLOGIES = [
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Django",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
  "REST API",
];
export const CATEGORIES = ["Web App", "Library", "Tool", "Full Stack"];

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio built with React and TypeScript",
    longDescription:
      "This portfolio website showcases my work as a full-stack developer. Built with React, TypeScript, and Tailwind CSS. Features a modern design with smooth animations, dark mode support, and optimized performance.",
    category: "Web App",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1633356122544-f134ef2e00ae?auto=format&fit=crop&w=800&q=80",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://portfolio.example.com",
    stars: 42,
    featured: true,
    createdAt: "2 months ago",
    highlights: [
      "Responsive Design",
      "TypeScript",
      "SEO Optimized",
      "Dark Mode",
    ],
  },
  {
    id: "2",
    title: "API Gateway Service",
    description: "Scalable REST API built with Node.js and Express",
    longDescription:
      "A production-ready API gateway service that handles authentication, rate limiting, and request routing. Built with Node.js, Express, and MongoDB. Supports JWT authentication and has comprehensive test coverage.",
    category: "Full Stack",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    imageUrl:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    ],
    githubUrl: "https://github.com",
    stars: 128,
    featured: true,
    createdAt: "4 months ago",
    highlights: ["JWT Auth", "Rate Limiting", "MongoDB", "Production Ready"],
  },
  {
    id: "3",
    title: "React Component Library",
    description: "Reusable UI component library with TypeScript",
    longDescription:
      "A comprehensive React component library built with TypeScript and Storybook. Includes 40+ components with full documentation, accessibility features, and prop validation.",
    category: "Library",
    technologies: ["React", "TypeScript", "Storybook", "Jest"],
    imageUrl:
      "https://images.unsplash.com/photo-1633356122544-f134ef2e00ae?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1633356122544-f134ef2e00ae?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://components.example.com",
    stars: 312,
    featured: true,
    createdAt: "6 months ago",
    highlights: ["40+ Components", "Accessibility", "Storybook", "Full Docs"],
  },
  {
    id: "4",
    title: "CLI Data Tool",
    description: "Command-line tool for data processing and analysis",
    longDescription:
      "A powerful CLI tool built with Python for batch data processing. Features parallel processing, multiple export formats, and an intuitive command structure.",
    category: "Tool",
    technologies: ["Python", "Click", "Pandas", "SQLite"],
    imageUrl:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    ],
    githubUrl: "https://github.com",
    stars: 89,
    featured: false,
    createdAt: "3 months ago",
    highlights: ["Python", "Parallel Processing", "Multi-format Export", "CLI"],
  },
];

export const APP_NAME = "Dennis Mwangi";
export const APP_TITLE = "Full Stack Developer";
