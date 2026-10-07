// project.interface.ts

/** Versión ligera — para listados, cards, previews */
export interface Project {
  id: string;
  state?: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  imageCover: string;
  icon?: string;
  technologies: string[];
  role: string;
  year: number;
  highlights: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  npm?: string;
}

/** Versión completa — solo para la página de detalle */
export interface ProjectDetail extends Project {
  aboutDescription: string;
  problem?: string;
  whatIBuilt?: string;
  techStack?: TechStackItem[];
  keyFeatures?: KeyFeature[];
  results?: string;
  imagesDetail?: string[];
  features?: string[];
}

export interface TechStackItem {
  label: string;  
  value: string;
}

export interface KeyFeature {
  title: string;
  description: string;
}