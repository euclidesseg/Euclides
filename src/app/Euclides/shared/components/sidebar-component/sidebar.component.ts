import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouteInterface } from '../../interfaces/routes.interface';

@Component({
  selector: 'app-sidebar-component',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  routes = input.required<RouteInterface[]>();

}
