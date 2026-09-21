import { ChangeDetectionStrategy, Component, inject, input, output } from '@angular/core';
import { RouteInterface } from '../../interfaces/routes.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UpperCasePipe } from '@angular/common';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-sidebar-component',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  navigationService = inject(NavigationService)
  routes = this.navigationService.routes;

  sidebarState = input.required<boolean>();

  changeSidebar = output();

  toggleSidebar(){
    this.changeSidebar.emit();
  }
}
