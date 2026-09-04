import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
} from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';

export interface SidebarRoute {
  path: string;
  label: string;
}

@Component({
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    LucideAngularModule,
    UpperCasePipe,
  ],
  templateUrl: './layout-home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutHomeComponent {
  routes = signal<SidebarRoute[]>([
    { path: 'about', label: 'Home' },
    { path: 'about', label: 'Habilidades' },
    { path: 'projects', label: 'Proyectos' },
    { path: 'certifications', label: 'Certificaciones' },
    { path: 'experience', label: 'Experiencia ' },
    { path: 'articles', label: 'Articulos' },
    { path: 'contact', label: 'Contacto' },
  ]);

  sidebarOpen = signal(false);

  readonly LG_BREAKPOINT = 1024; // Tailwind lg

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
    if (window.innerWidth < this.LG_BREAKPOINT) {
      this.sidebarOpen.update((v) => !v);
    }
  }

  private syncSidebarWithScreen = () => {
    if (window.innerWidth >= this.LG_BREAKPOINT) {
      this.sidebarOpen.set(true);
    } else {
      this.sidebarOpen.set(false);
    }
  };
}
