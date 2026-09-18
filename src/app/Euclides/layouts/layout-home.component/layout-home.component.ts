import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar-component/sidebar.component';
import { RouteInterface } from '../../shared/interfaces/routes.interface';

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    UpperCasePipe,
    FooterComponent,
    SidebarComponent
  ],
  templateUrl: './layout-home.component.html',
})
export class LayoutHomeComponent {
  routes = signal<RouteInterface[]>([
    { path: 'about', label: 'Sobre mi' },
    { path: 'skills', label: 'Habilidades' },
    { path: 'projects', label: 'Proyectos' },
    { path: 'certifications', label: 'Certificaciones' },
    { path: 'experience', label: 'Experiencia ' },
    { path: 'articles', label: 'Articulos' },
    { path: 'contact', label: 'Contacto' },
  ]);

  sidebarOpen = signal(false);

  readonly brackPointlb = 1024; // Tailwind lg

  readonly year = new Date().getFullYear();

  ngOnInit() {
    this.syncSidebarWithScreen();
    window.addEventListener('resize', this.syncSidebarWithScreen);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.syncSidebarWithScreen);
  }

  toggleSidebar() {
    // Solo permite toggle en mobile
    if (window.innerWidth < this.brackPointlb) {
      this.sidebarOpen.update((v) => !v);
    }
  }

  // Sincronizar sidebar con el tamaño de la pantalla
  private syncSidebarWithScreen = () => {
    if (window.innerWidth >= this.brackPointlb) {
      this.sidebarOpen.set(true);
    } else {
      this.sidebarOpen.set(false);
    }
  };
}
