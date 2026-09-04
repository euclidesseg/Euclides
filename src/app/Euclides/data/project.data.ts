import { Project } from './interface/project.interface';

export const PROJECTS: Project[] = [
  {
    id: '1',
    state: 'En construcción',
    slug: 'Plataforma de conocimiento',
    title: 'Synap',
    shortDescription: 'Plataforma web tipo blog creada como una idea propia con el fin de que los usuarios puedan compartir artículos, investigaciones o reseñas de libros, películas y series.',
    description:
      'Plataforma web tipo blog, diseñada para el intercambio intelectual profundo. Un espacio donde investigadores y creadores comparten artículos, reseñas y hallazgos tecnológicos con una interfaz limpia y centrada en la lectura.',

    aboutDescription: 'Synap nació como una respuesta a la saturación de contenido efímero en redes sociales. El objetivo principal es crear una plataforma que fomente la reflexión y el análisis técnico o cultural profundo. El desarrollo se centrará en la experiencia de usuario (UX) para escritores, proporcionando un editor personalizado que permite insertar fragmentos de codigo, imageens y texto enriquecido.',
    imageCover: 'assets/images/projects/synap01.webp',
    imagesDetail: ['assets/images/projects/synap01.webp', 'assets/images/projects/synap02.webp'],
    icon: 'ph-shopping-cart',

    technologies: ['Angular', 'Java', 'Spring Boot', 'PostgresSQL', 'TypeScript'],

    role: 'Ingeniero de Software Full Stack',
    year: 2026,

    highlights: [
      'Arquitectura modular y escalable',
      'Registro de usuarios',
      'Gestión de roles y permisos',
    ],
  },

  {
    id: '2',
    state: 'Publicado',
    slug: 'Editor de texto',
    title: 'Euclides Editor',
    shortDescription: 'Editor de texto enriquecido basado en ProseMirror, diseñado para integrarse de forma nativa en aplicaciones Angular.',

    description:
      'Librería de editor de texto enriquecido construida sobre ProseMirror, desarrollada como una solución flexible y extensible para aplicaciones Angular. Permite la creación de contenido estructurado con soporte para, bloques de código, imágenes y texto enriquecido.',

    aboutDescription:'Euclides Editor nace directamente de una necesidad real dentro de mi proyecto, Synap. Mientras desarrollaba la plataforma, necesitaba un editor de texto enriquecido que se integrara bien con Angular y que me permitiera controlar completamente la experiencia de escritura.\n\nDespués de evaluar varias alternativas, ninguna se ajustaba a lo que buscaba: o eran demasiado rígidas, difíciles de personalizar o no se adaptaban bien a mi arquitectura. En lugar de forzar una solución externa, decidí construir mi propio editor.\n\nA partir de ahí desarrollé Euclides Editor sobre ProseMirror, diseñándolo como una librería modular y extensible, con soporte para, bloques de código, imágenes y contenido estructurado. Mi objetivo fue crear una herramienta flexible, fácil de integrar y centrada en la experiencia del desarrollador y del usuario.\n\nFinalmente, decidí publicarla como paquete en NPM, no solo para usarla en Synap, sino también para que otros desarrolladores puedan aprovecharla o contribuir a su evolución.',

    imageCover: 'assets/images/projects/euclides_editor01.webp',
    imagesDetail: [
      'assets/images/projects/euclides_editor02.webp',
      'assets/images/projects/euclides_editor03.webp'
    ],

    icon: 'ph-code',

    technologies: ['Angular', 'ProseMirror', 'TypeScript', 'CSS', 'HTML'],
    repositoryUrl: 'https://github.com/euclidesseg/euclides-editor/tree/main/euclides-editor',
    demoUrl: 'https://euclides-editor.netlify.app/',
    npm:'https://www.npmjs.com/package/euclides-editor',
    role: 'Ingeniero de Software Frontend',
    year: 2026,

    highlights: [
      'Integración nativa con Angular',
      'Arquitectura extensible y personalizable',
      'Publicado como paquete reutilizable en NPM'
    ],
  },
  {
    id: '3',
    state: 'Desplegado',
    slug: 'Plataforma de consulta',
    title: 'SecopAnalytic',
    shortDescription: 'Plataforma analítica desarrollada con Vue.js para la consulta y visualización de contratos públicos en Colombia (SECOP).',
    description:
      'SecopAnalytic es una solución técnica diseñada para democratizar el acceso a los datos de contratación pública. A diferencia de los portales gubernamentales tradicionales, ofrece una interfaz optimizada, búsqueda avanzada y visualización de datos en tiempo real, permitiendo a ciudadanos e investigadores auditar procesos de manera eficiente.',

    aboutDescription:
      'El proyecto surgió de la necesidad de transformar datos crudos de APIs gubernamentales en información accionable. Se implementó una arquitectura reactiva que maneja grandes volúmenes de datos sin comprometer el rendimiento. El enfoque principal fue la experiencia de usuario (UX), integrando filtros dinámicos y una gestión de estado robusta para garantizar una navegación fluida entre miles de registros.',

    imageCover: 'assets/images/projects/secop01.webp',
    imagesDetail: [
      'assets/images/projects/secop01.webp',
      'assets/images/projects/secop03.webp',
    ],
    icon: 'ph-chart-bar', // Cambiado de shopping-cart a un icono de análisis/gráficos

    // Ajustado a nuestra stack real de Vue.js
    technologies: ['Vue.js', 'Pinia', 'Tailwind CSS', 'VueRouter', 'TypeScript'],

    repositoryUrl: 'https://github.com/euclidesseg/SecopII',
    demoUrl: 'https://secopllanalytic.netlify.app/', // O el link que corresponda

    role: 'Ingeniero de Software Full Stack',
    year: 2026,

    highlights: [
      'Consumo e indexación de datos desde la API de Socrata (SECOP)',
      'Sistema de filtrado reactivo con gestión de estado global',
      'Arquitectura modular y escalable bajo estándares de Clean Code',
    ],
  }
];
