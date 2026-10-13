import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project, ProjectDetail } from '../data/interface/project.interface';
import { PROJECTS } from '../data/project.data';
import { skills } from '../data/skills'

@Injectable({
  providedIn: 'root',
})
export class EuclidesService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProjectBySlug(slug: string): Observable<ProjectDetail> {
    const project = PROJECTS.find(project => project.slug === slug);

    if (!project) {
      throw new Error(`Project "${slug}" not found`);
    }

    return of(project);
  }

  getSkills() {
    return skills;
  }
}
