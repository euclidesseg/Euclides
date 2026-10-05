import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { EuclidesService } from '../../services/euclides.service';
import { Project } from '../../data/interface/project.interface';

@Component({
  standalone: true,
  selector: 'app-projects-page',
  imports: [RouterModule],
  templateUrl: './project-page.component.html',
  styleUrl:'./project-page.component.css'
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
