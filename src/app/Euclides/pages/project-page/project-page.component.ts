import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { EuclidesService } from '../../services/euclides.service';
import { Project } from '../../data/interface/project.interface';

@Component({
  standalone: true,
  selector: 'app-projects-page',
  imports: [RouterModule],
  templateUrl: './project-page.component.html',
  styles: `
    .animated__sircle-element{
      position: absolute;
      height: 100%;
      width: 100%;
      inset: 1px;
      background-color: red;
      z-index: 1;
    }
  `,
})
export default class ProjectsPageComponent {
  projects = signal<Project[]>([]);
  private readonly service = inject(EuclidesService);

  constructor() {
    this.loadProjects();
  }

  private loadProjects(): void {
    this.service.getProjects().subscribe((projects) => this.projects.set(projects));
  }
}
