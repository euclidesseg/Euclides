import { Component, signal } from '@angular/core';

 interface Certification {
  id: number;
  slug: string;

  title: string;
  institution: string;      // Coursera, Udemy, Universidad, etc.
  institutionImage: string; // logo / imagen de la academia

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
})

export default class CertificationsPageComponent {

 certifications = signal<Certification[]>([
  {
    id: 1,
    slug: 'software-engineer-iberoamericana',
    title: 'Ingeniero de Software',
    institution: 'Corporación Universitaria Iberoamericana',
    institutionImage:
      'https://pbs.twimg.com/profile_images/1587110309512318977/9mlU0m4Z_400x400.jpg',

    startDate: 'Junio 2023',
    endDate: 'Actualidad',

    skills: [
      'Matemáticas',
      'Ecuaciones',
      'Inglés',
      'Metodologías'
    ],

    year: 2023
  },

  {
    id: 2,
    slug: 'software-development-technician-cesde',
    title: 'Técnico en Desarrollo de Sowftware',
    institution: 'CESDE',
    institutionImage:
      'https://mir-s3-cdn-cf.behance.net/projects/404/deac98138334863.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',

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

    credentialUrl:
      'https://firebasestorage.googleapis.com/v0/b/portfolio-898c3.appspot.com/o/certificado-cesde.pdf?alt=media&token=bba58de4-69d0-4dde-a572-44a071ff7945',

    year: 2023
  },

  {
    id: 3,
    slug: 'spring-boot-microservices-coursera',
    title:
      'Building Scalable Java Microservices with Spring Boot and Spring Cloud',
    institution: 'Coursera',
    institutionImage:
      'https://cdn6.aptoide.com/imgs/1/6/9/169eb96640029c9984161f09c34f7109_icon.png',

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
    title: 'Introducctión to Git and GitHub',
    institution: 'Coursera',
    institutionImage:
      'https://cdn6.aptoide.com/imgs/1/6/9/169eb96640029c9984161f09c34f7109_icon.png',

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
    institution: 'Coursera',
    institutionImage:
      'https://cdn6.aptoide.com/imgs/1/6/9/169eb96640029c9984161f09c34f7109_icon.png',

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
    institution: 'Coursera',
    institutionImage:
      'https://cdn6.aptoide.com/imgs/1/6/9/169eb96640029c9984161f09c34f7109_icon.png',

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
    title: 'Diploma de Programacion en Java',
    institution: 'Politécnico de Colombia',
    institutionImage:
      'https://yt3.googleusercontent.com/ytc/APkrFKakoq7Kf1x0mIV7rAQnr7A4jOGVqRTxPwKKyi--=s900-c-k-c0x00ffffff-no-rj',

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
      'https://firebasestorage.googleapis.com/v0/b/portfolio-898c3.appspot.com/o/politecnico-java.pdf?alt=media&token=be3d2203-5f51-4f4f-8f1e-4084a8d48a6a',

    year: 2022
  }
]);


 }
