import { UpperCasePipe } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouteInterface } from '../../interfaces/routes.interface';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-footer-component',
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  navigationService = inject(NavigationService);

  public year = signal<number>(new Date().getFullYear());
  routes = this.navigationService.routes
}
