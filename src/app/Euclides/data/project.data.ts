import { ProjectDetail } from './interface/project.interface';

export const PROJECTS: ProjectDetail[] = [
  {
    id: '1',
    state: 'En construcción',
    slug: 'plataforma de conocimiento',
    title: 'Synap',
    shortDescription: 'Plataforma web tipo blog/revista creada como una iniciativa propia para compartir artículos, investigaciones y reseñas de libros, películas y series.',
    description: 'Plataforma web tipo blog/revista pensada para ofrecer un espacio donde estudiantes, profesores, investigadores, profesionales y personas interesadas puedan compartir y descubrir contenido que aporte conocimiento y fomente la reflexión.',
    aboutDescription: `Synap nació como una idea propia. Para mí representa una respuesta a la saturación de contenido superficial que se encuentra actualmente en las redes sociales.
            El objetivo principal es crear una plataforma que fomente la reflexión, el análisis técnico y la exploración cultural mediante contenido desarrollado por personas interesadas en compartir conocimiento.
            El proyecto también representa un espacio personal para desarrollar y publicar mis propios artículos, explorar ideas y experimentar con la construcción de una plataforma orientada al conocimiento.`,
    problem: 'Mientras estaba realizando el curso de investigación 1 y 2 resultó que debía publicar un articulo informativo y las plataformas que recomendaban eran anticuadas y sin una buena UI',
    whatIBuilt: 'Estoy construyendo una plataforma web tipo blog/revista donde los usuarios podrán crear perfiles, publicar contenido y compartir artículos, investigaciones y reseñas. El proyecto está siendo desarrollado desde cero, incluyendo tanto la experiencia de usuario como la arquitectura de la aplicación y su backend.',
    techStack: [
      { label: 'Frontend', value: 'Angular, CSS, Tailwind' },
      { label: 'Backend', value: 'Java + Spring Boot' },
      { label: 'Base de datos', value: 'PostgreSQL' },
      { label: 'Lenguaje frontend', value: 'TypeScript' },
    ],
    keyFeatures: [
      { title: 'Publicación de contenido', description: 'Los usuarios podrán crear y publicar artículos, investigaciones y reseñas de diferentes tipos de contenido.' },
      { title: 'Experiencia para escritores y lectores', description: 'La plataforma está siendo diseñada teniendo en cuenta tanto la experiencia de creación de contenido como la experiencia de lectura.' },
      { title: 'Usuarios y roles', description: 'El sistema contempla registro de usuarios, autenticación y diferentes roles y permisos dentro de la plataforma.' },
      { title: 'Contenido técnico y cultural', description: 'El proyecto busca reunir contenido relacionado con conocimiento técnico, académico, científico y cultural.' },
    ],
    results: 'Actualmente Synap se encuentra en construcción y representa uno de mis proyectos personales principales.',
    imageCover: 'assets/images/projects/synap-image-01.webp',
    imagesDetail: [
      'assets/images/projects/synap-image-02.webp',
      'assets/images/projects/synap-image-03.webp',
    ],
    icon: 'ph-brain',
    role: 'Ingeniero de Software Full Stack',
    year: 2026,
    highlights: ['Arquitectura modular y escalable', 'Registro y autenticación de usuarios', 'Gestión de roles y permisos'],
  },
  {
    id: '2',
    state: 'Publicado',
    slug: 'editor-de-texto',
    title: 'Euclides Editor',
    shortDescription: 'Editor de texto enriquecido basado en ProseMirror, diseñado para integrarse de forma nativa en aplicaciones Angular.',
    description: 'Librería de editor de texto enriquecido construida sobre ProseMirror y desarrollada como una solución flexible y extensible para aplicaciones Angular. Permite crear contenido estructurado con soporte para texto enriquecido, bloques de código, imágenes y otras funcionalidades de edición.',
    aboutDescription: `Euclides Editor nació directamente de una necesidad real dentro de mi proyecto Synap. Mientras desarrollaba la plataforma, necesitaba un editor de texto enriquecido que se integrara correctamente con Angular y que me permitiera tener control sobre la experiencia de escritura.
Después de evaluar diferentes alternativas, encontré que algunas eran demasiado rígidas, difíciles de personalizar o no se adaptaban completamente a la arquitectura que estaba utilizando. En lugar de adaptar el proyecto a una herramienta externa, decidí construir mi propio editor.
A partir de esa necesidad desarrollé Euclides Editor sobre ProseMirror, diseñándolo como una librería modular y extensible.
Finalmente decidí publicarlo como paquete en NPM, no solamente para utilizarlo dentro de Synap, sino también para que otros desarrolladores puedan integrarlo en sus propias aplicaciones.`,
    problem: 'Mientras desarrollaba Synap necesitaba un editor de texto enriquecido que pudiera integrarse de forma natural con Angular y que permitiera tener un alto nivel de control sobre la experiencia de escritura y la estructura del contenido.',
    whatIBuilt: 'Desarrollé una librería de editor de texto enriquecido basada en ProseMirror y adaptada para aplicaciones Angular. La librería proporciona una arquitectura modular que permite incorporar diferentes funcionalidades de edición y extender el comportamiento del editor según las necesidades de cada aplicación.',
    techStack: [
      { label: 'Framework', value: 'Angular' },
      { label: 'Editor', value: 'ProseMirror' },
      { label: 'Lenguaje', value: 'TypeScript' },
      { label: 'Estilos', value: 'CSS' },
      { label: 'Markup', value: 'HTML' },
    ],
    keyFeatures: [
      { title: 'Integración con Angular', description: 'Diseñado específicamente para integrarse como una solución reutilizable dentro de aplicaciones Angular.' },
      { title: 'Arquitectura extensible', description: 'La arquitectura permite agregar y modificar funcionalidades del editor sin acoplar toda la aplicación a una implementación específica.' },
      { title: 'Contenido enriquecido', description: 'Permite trabajar con diferentes tipos de contenido estructurado, incluyendo texto enriquecido, bloques de código e imágenes.' },
      { title: 'Publicación como paquete', description: 'El editor fue empaquetado y publicado en NPM para facilitar su reutilización en otros proyectos.' },
    ],
    results: 'Euclides Editor fue publicado como una librería reutilizable en NPM y actualmente forma parte de mi ecosistema de proyectos personales. Su desarrollo también permitió resolver una necesidad concreta de Synap mientras construía una herramienta que puede ser utilizada independientemente.',
    imageCover: 'assets/images/projects/euclides_editor01.webp',
    imagesDetail: [
      'assets/images/projects/euclides_editor02.webp',
      'assets/images/projects/euclides_editor03.webp',
    ],
    icon: 'ph-code',
    demoUrl: 'https://euclides-editor.netlify.app/',
    npm: 'https://www.npmjs.com/package/euclides-editor',
    role: 'Ingeniero de Software Frontend',
    year: 2026,
    highlights: ['Integración nativa con Angular', 'Arquitectura extensible y personalizable', 'Publicado como paquete reutilizable en NPM'],
  },
  {
    id: '3',
    state: 'Desplegado',
    slug: 'plataforma-de-consulta',
    title: 'SecopAnalytic',
    shortDescription: 'Plataforma analítica desarrollada con Vue.js para la consulta y visualización de contratos públicos en Colombia mediante datos del SECOP.',
    description: 'SecopAnalytic es una solución técnica orientada a facilitar la consulta y exploración de datos de contratación pública. La plataforma proporciona una interfaz optimizada para realizar búsquedas, aplicar filtros y visualizar información proveniente de fuentes de datos gubernamentales.',
    aboutDescription: `El proyecto surgió de la necesidad de transformar grandes cantidades de datos provenientes de APIs gubernamentales en información más fácil de consultar y explorar.

El enfoque principal estuvo en construir una interfaz capaz de manejar grandes volúmenes de información sin comprometer la experiencia del usuario.

Para esto se implementó una arquitectura reactiva utilizando Vue.js, Pinia y TypeScript, junto con filtros dinámicos y una gestión de estado centralizada.`,
    problem: 'Los datos de contratación pública pueden resultar difíciles de explorar directamente cuando se presentan como grandes cantidades de registros. El proyecto busca proporcionar una interfaz más clara y herramientas de filtrado que faciliten la consulta y exploración de esta información.',
    whatIBuilt: 'Desarrollé una plataforma web para consultar y explorar información de contratación pública obtenida mediante APIs de datos abiertos. La aplicación incorpora búsqueda, filtros dinámicos, gestión de estado y visualización de grandes cantidades de registros mediante una interfaz optimizada.',
    techStack: [
      { label: 'Framework', value: 'Vue.js' },
      { label: 'Gestión de estado', value: 'Pinia' },
      { label: 'Estilos', value: 'Tailwind CSS' },
      { label: 'Routing', value: 'Vue Router' },
      { label: 'Lenguaje', value: 'TypeScript' },
    ],
    keyFeatures: [
      { title: 'Consulta de datos', description: 'Permite consultar información proveniente de APIs de datos abiertos relacionados con contratación pública.' },
      { title: 'Filtrado reactivo', description: 'Implementa filtros dinámicos para facilitar la exploración de grandes cantidades de registros.' },
      { title: 'Gestión de estado', description: 'Utiliza Pinia para centralizar y administrar el estado de la aplicación de forma predecible.' },
      { title: 'Visualización de información', description: 'Presenta los datos mediante una interfaz diseñada para facilitar su lectura y exploración.' },
    ],
    results: 'El proyecto fue desplegado como una aplicación web funcional y permitió aplicar conceptos de arquitectura frontend, gestión de estado, consumo de APIs y optimización de interfaces orientadas al manejo de datos.',
    imageCover: 'assets/images/projects/secop01.webp',
    imagesDetail: [
      'assets/images/projects/secop01.webp',
      'assets/images/projects/secop03.webp',
    ],
    icon: 'ph-chart-bar',
    repositoryUrl: 'https://github.com/euclidesseg/SecopII',
    demoUrl: 'https://secopllanalytic.netlify.app/',
    role: 'Ingeniero de Software Full Stack',
    year: 2026,
    highlights: ['Consumo de datos desde APIs gubernamentales', 'Sistema de filtrado reactivo con gestión de estado global', 'Arquitectura modular y escalable'],
  },
];