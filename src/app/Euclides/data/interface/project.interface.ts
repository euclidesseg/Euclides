export interface Project {
  id: string;
  state?:string;
  slug: string;               // Para rutas: /projects/:slug
  title: string;
  shortDescription: string;
  description: string;
  aboutDescription:string;
  imageCover: string;
  imagesDetail: string[];
  icon?: string;              // Phosphor icon opcional

  technologies: string[];

  repositoryUrl?: string;
  demoUrl?: string;
  npm?:string,

  role: string;               // Tu rol en el proyecto
  year: number;

  highlights: string[];       // Logros clave
}
