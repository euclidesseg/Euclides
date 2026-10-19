import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EuclidesService } from '../../services/euclides.service';
import { Project, ProjectDetail } from '../../data/interface/project.interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-page-detail.component.html',
  styleUrl: './project-page-detail.component.css'
})

export default class ProjectPageDetailComponent implements OnInit {

  ngOnInit(): void {
    this.getProjectbySlug(this.projectTitle)
  }


  projectService = inject(EuclidesService);
  location = inject(Location);
  projectTitle: string = inject(ActivatedRoute).snapshot.params['title'];

  isError = signal<string | null>(null);
  project = signal<ProjectDetail | null>(null);

  getProjectbySlug(slug: string): void {
    this.projectService.getProjectBySlug(slug).subscribe({
      next: (project) => {
        this.project.set(project)!;
      },
      error: (error) => {
        this.isError.set(error)
      }
    });
  }
}
