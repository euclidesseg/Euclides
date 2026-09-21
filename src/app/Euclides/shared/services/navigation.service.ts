import { Injectable, signal } from '@angular/core';
import { RouteInterface } from '../interfaces/routes.interface';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {

  private readonly _routes = signal<RouteInterface[]>([
    { path: 'about', label: 'Sobre_mi' },
    { path: 'skills', label: 'Habilidades' },
    { path: 'projects', label: 'Proyectos' },
    { path: 'certifications', label: 'Certificaciones' },
    { path: 'experience', label: 'Experiencia ' },
    { path: 'articles', label: 'Articulos' },
    { path: 'contact', label: 'Contacto' },
  ]);

  // retorna una version de solo lectura de una señal y no puede ser modificada usando metodos de actualización
  routes = this._routes.asReadonly(); 
}
