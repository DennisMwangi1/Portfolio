export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "Web App" | "Library" | "Tool" | "Full Stack";
  technologies: string[];
  imageUrl: string;
  images: string[];
  githubUrl: string;
  liveUrl?: string;
  stars: number;
  featured: boolean;
  createdAt: string;
  highlights: string[];
}

export interface ChatMessage {
  id: string;
  role: "user" | "model";
  text: string;
  timestamp: Date;
}

export type ViewState = "portfolio" | "about" | "chat";
