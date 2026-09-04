import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EuclidesService } from '../../services/euclides.service';
import { Project } from '../../data/interface/project.interface';
import { Location } from '@angular/common';
@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl:'./project-detail.component.html',
})
export default class ProjectDetail implements OnInit {
  ngOnInit(): void {
   this.getProjectbyTitle(this.projectTitle)
  } 

  
  projectService = inject(EuclidesService);
  location = inject(Location);
  projectTitle:string = inject(ActivatedRoute).snapshot.params['title'];
  
  isError = signal<string|null> (null);
  project = signal<Project | null>(null);

 getProjectbyTitle(title: string) {
  this.projectService.getProjectByTitle(title).subscribe({
    next:(project) =>{
      this.project.set(project)
    },
    error:(error) =>{
      this.isError.set(error)
    }
  });
}
}
