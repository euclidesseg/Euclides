import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  signal,
  computed,
  inject,
  Renderer2,
  effect,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { FooterComponent } from '../../shared/components/footer-component/footer.component';
import { SidebarComponent } from '../../shared/components/sidebar-component/sidebar.component';
import { HeaderComponent } from '../../shared/components/header-component/header.component';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  imports: [
    RouterOutlet,
    LucideAngularModule,
    FooterComponent,
    SidebarComponent,
    HeaderComponent

],
  templateUrl: './layout-home.component.html',
})
export class LayoutHomeComponent {

  navigationService = inject(NavigationService)
  private renderer = inject(Renderer2);
  constructor(){
    effect(() =>{
      const isOpen = this.sidebarOpen();
      if(isOpen){
        this.renderer.addClass(document.body,'sidebar-open');
      }else{
        this.renderer.removeClass(document.body, 'sidebar-open')
      }
    })
  }
  sidebarOpen = signal(false);
  sidebarManuallyClosed = signal<boolean>(false);

  routes = this.navigationService.routes;


  readonly brackPointlg = 1024; // Tailwind lg

  readonly year = new Date().getFullYear();

  ngOnInit() {
    this.syncSidebarWithScreen();
    window.addEventListener('resize', this.syncSidebarWithScreen);
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.syncSidebarWithScreen);
  }

  toggleSidebar() {
    if (window.innerWidth < this.brackPointlg) {
      this.sidebarOpen.update((v) => !v);
    }
    this.sidebarManuallyClosed.set(this.sidebarOpen() === false)
  }

  // Sincronizar sidebar con el tamaño de la pantalla
  private syncSidebarWithScreen = () => {
    if (this.sidebarManuallyClosed() && (window.innerHeight < this.brackPointlg)) {
      return;
    }
    if (window.innerWidth < this.brackPointlg) {
      this.sidebarOpen.set(true);
    } else {
      this.sidebarOpen.set(false);
    }
  };
}
