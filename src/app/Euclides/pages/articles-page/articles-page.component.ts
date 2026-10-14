import { Component, signal } from '@angular/core';

export interface ArticlePreview {
  id: number;
  slug: string;

  title: string;
  excerpt: string;

  category: string;
  readTime: number; // minutos
  publishedAt: string; // ISO o texto ya formateado

  coverImage?: string; // opcional (luego puedes usarla)
  articleUrl: string; // link externo o interno
}

@Component({
  imports: [],
  templateUrl: './articles-page.component.html',
  styleUrl: './articles-page.component.css',
})
export default class ArticlesPageComponent {
  readonly articles = signal<ArticlePreview[]>([
    {
      id: 1,
      slug: 'creando-api-spring-boot',
      title: 'Creando API con Spring Boot',
      excerpt:
        'Guía práctica para desarrollar una API REST con Spring Boot, Java 17 y Spring Data JPA, desde la configuración inicial del proyecto y la conexión a una base de datos relacional hasta la implementación de entidades, repositorios, servicios y controladores.',
      category: 'Desarrollo backend',
      readTime: 8,
      publishedAt: '09 Jul 2023',
      articleUrl:
        'https://www.linkedin.com/pulse/creando-api-con-spring-boot-euclides-perez/',
    },
    {
      id: 2,
      slug: 'el-fin-de-las-ideas-creatividad',
      title:
        '¿El fin de las ideas? Cómo ser una fuente inacabable de creatividad',
      excerpt:
        '¿Se pueden agotar las ideas? Este artículo explora la creatividad como una capacidad que puede desarrollarse mediante la práctica, la observación y la conexión entre conocimientos y experiencias. A partir de las ideas de Rajadell Carreras (2019), se reflexiona sobre cómo superar las barreras que limitan nuestra imaginación y encontrar nuevas formas de comprender y resolver problemas.',
      category: 'Creatividad',
      readTime: 4,
      publishedAt: '12 Sep 2026',
      articleUrl:
        'https://actividad3creatividad.blogspot.com/2026/09/el-fin-de-las-ideas-como-ser-una-fuente.html',
    },
  ]);
}
//TODO puedo tambien escribir articulos sobre problemas que he solucionado en letcode
