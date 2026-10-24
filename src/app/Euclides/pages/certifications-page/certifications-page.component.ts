import { Component, signal } from '@angular/core';

interface Certification {
  id: number;
  slug: string;

  title: string;
  institution: string;      // Coursera, Udemy, Universidad, etc.

  startDate: string;        // 'Agosto 2023'
  endDate: string;          // 'Septiembre 2023'

  description?: string;     // opcional, para vista detalle
  skills: string[];         // Aptitudes clave

  credentialUrl?: string;   // link a credencial
  year: number;
}

@Component({
  imports: [],
  templateUrl: './certifications-page.component.html',
  styleUrl: './certifications-page.component.css'
})

export default class CertificationsPageComponent {

  certifications = signal<Certification[]>([
    {
      id: 1,
      slug: 'software-engineer-iberoamericana',
      title: 'Ingeniería de Software',
      institution: 'C.U Iberoamericana',
      description: 'Me encuentro en fase final de la carrera como ingeniero de software, en ella he podido aprender habilidades técnicas y de resolución de problemas, entre ellas: Arquitectura, Matemáticas, Probabilidad, Estadística ',


      startDate: 'Junio 2023',
      endDate: 'Actualidad',

      skills: [
        'Matemáticas',
        'Ecuaciones',
        'Inglés',
        'Estadisticas',
        'Arquitectura',
        'Gestion de proyectos'
      ],

      year: 2023
    },

    {
      id: 2,
      slug: 'software-development-technician-cesde',
      title: 'Técnico en Desarrollo de Software',
      description: 'Cursé y aprobé estudios correspondientes a Técnico en Desarrollo de Software; en esta tecnóloga obtuve habilidades de escritura de código y resolución de problemas con el lenguaje Java',
      institution: 'Cesde',

      startDate: 'Junio 2021',
      endDate: 'Junio 2023',

      skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'Java',
        'C#',
        'GitHub',
        'Python',
        'Lógica de Programación',
        'Análisis de Datos',
        'SQL Server',
        'MySQL',
        'React',
        'Angular'
      ],

      year: 2023
    },

    {
      id: 3,
      slug: 'spring-boot-microservices-coursera',
      title:
        'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
      description: 'En esta certificación de Coursera pude aprender cómo desplegar aplicaciones usando GCP; aprendí a utilizar la consola Cloud Shell, además de la implementación de microservicios con Spring Boot',
      institution: 'Coursera',

      startDate: 'Agosto 2023',
      endDate: 'Septiembre 2023',

      skills: [
        'Spring',
        'Spring Boot',
        'Java',
        'Sleuth',
        'Zipkin',
        'Spring Cloud',
        'Cloud Shell',
        'GCP'
      ],

      credentialUrl:
        'https://www.coursera.org/account/accomplishments/certificate/7LXUXY2ENFPP',

      year: 2023
    },

    {
      id: 4,
      slug: 'introduction-to-git-and-github',
      title: 'Introduction to Git and GitHub',
      description: 'Logré terminar con eficiencia esta certificación y al final pude ser capaz de trabajar en equipos de desarrollo versionando los proyectos en Git e implementando un flujo de Git Flow',
      institution: 'Coursera',

      startDate: 'Julio 2023',
      endDate: 'Agosto 2023',

      skills: [
        'Git',
        'GitHub',
        'Python',
        'QuickLabs'
      ],

      credentialUrl:
        'https://www.coursera.org/account/accomplishments/certificate/DDQX2D48MG27',

      year: 2023
    },

    {
      id: 5,
      slug: 'crash-course-on-python',
      title: 'Crash Course on Python',
      description: 'Gracias a este curso pude comprender los fundamentos del lenguaje Python; gracias a esto aprendí a configurar entornos virtuales y a desarrollar utilizando Spyder',
      institution: 'Coursera',

      startDate: 'Abril 2023',
      endDate: 'Junio 2023',

      skills: [
        'Python',
        'Spyder',
        'Algoritmos',
        'POO'
      ],

      credentialUrl:
        'https://www.coursera.org/account/accomplishments/certificate/VWDZ9B9DUJD3',

      year: 2023
    },

    {
      id: 6,
      slug: 'introduccion-html5',
      title: 'Introducción al HTML5',
      description: 'Esta certificación me ayudó a comprender y escribir código HTML semántico siguiendo las bases dispuestas por W3Schools',
      institution: 'Coursera',

      startDate: 'Abril 2023',
      endDate: 'Junio 2023',

      skills: [
        'HTML5',
        'CSS3',
        'Visual Studio Code',
        'GitHub'
      ],

      credentialUrl:
        'https://www.coursera.org/account/accomplishments/certificate/AXSNK5ZVSQZQ',

      year: 2023
    },

    {
      id: 7,
      slug: 'diploma-java-programming',
      title: 'Diploma de Programación en Java',
      description: 'Gracias a este diplomado complementé los conocimientos que ya tenía como base desde el estudio de los estudios técnicos, logrando comprender a profundidad, entre ellos, la POO',
      institution: 'Politécnico de Colombia',

      startDate: 'Enero 2022',
      endDate: 'Febrero 2022',

      skills: [
        'Java',
        'NetBeans',
        'Programación Orientada a Objetos',
        'Clases',
        'Métodos'
      ],

      credentialUrl:
        'https://politecnicoaltonivel.edu.co/contable/app/certificados/pages/certificado.php?Id=gkJeQblDe9N23DxYLMw8',

      year: 2022
    }
  ]);


}