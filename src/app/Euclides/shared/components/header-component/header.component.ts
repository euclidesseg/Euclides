import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouteInterface } from '../../interfaces/routes.interface';

@Component({
  selector: 'app-header-component',
  imports: [RouterLink, RouterLinkActive, UpperCasePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  routes = input.required<RouteInterface[]>();
  sidebarState = input.required<boolean>();

  changeSidebar = output();
  toggleSidebar(){
    this.changeSidebar.emit()
  }
}
