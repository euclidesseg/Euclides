import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ParticleCanvasComponent } from '../../../components/particle-canva-component/particle-canvas.component';
import { RouterLink } from '@angular/router';
import { SidebarRoute } from '../../../layouts/layout-home.component/layout-home.component';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink, ParticleCanvasComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent { 

  public year = signal<number>(new Date().getFullYear());
   routes = signal<SidebarRoute[]>([
    { path: 'about', label: 'Sobre mi' },
    { path: 'skills', label: 'Habilidades' },
    { path: 'projects', label: 'Proyectos' },
    { path: 'certifications', label: 'Certificaciones' },
    { path: 'experience', label: 'Experiencia ' },
    { path: 'articles', label: 'Articulos' },
    { path: 'contact', label: 'Contacto' },
  ]);
}
