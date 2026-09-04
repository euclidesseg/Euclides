import { Component, signal } from '@angular/core';

export interface ArticlePreview {
  id: number;
  slug: string;

  title: string;
  excerpt: string;

  category: string;
  readTime: number;       // minutos
  publishedAt: string;    // ISO o texto ya formateado

  coverImage?: string;    // opcional (luego puedes usarla)
  articleUrl: string;     // link externo o interno
}



@Component({
  imports: [],
  templateUrl: './articles-page.component.html',
})
export default class ArticlesPageComponent { 

  readonly articles = signal<ArticlePreview[]>([
    {
      id: 1,
      slug: 'ia-futuro-ingeniero-software',
      title: '¿El Último Código que Escribirás? IA y el Futuro del Ingeniero de Software',
      excerpt:
        'La Ingeniería de Software siempre ha sido una profesión de vanguardia, pero hoy se enfrenta a su mayor disrupción. Herramientas como GitHub Copilot, ChatGPT y Amazon CodeWhisperer ya no son promesas; son realidades que escriben, depuran y prueban código a una velocidad asombrosa.',
      category: 'Ingeniería',
      readTime: 5,
      publishedAt: '15 Ene 2024',
      articleUrl: 'https://medium.com/'
    },
    {
      id: 2,
      slug: 'microservicios-spring',
      title: 'Microservicios en Java: más allá del hype',
      excerpt:
        'Los microservicios prometen escalabilidad y flexibilidad, pero también introducen complejidad. En este artículo analizamos cuándo usarlos y cuándo no.',
      category: 'Tecnología',
      readTime: 7,
      publishedAt: '02 Feb 2024',
      articleUrl: 'https://dev.to/'
    }
  ]);
  
 }
