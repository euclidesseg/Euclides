import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Project } from '../data/interface/project.interface';
import { PROJECTS } from '../data/project.data';

@Injectable({
  providedIn: 'root',
})
export class EuclidesService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProjectByTitle(title:string): Observable<Project | null>{
    return of(PROJECTS.find((project) => project.title === title) || null);
  }
}
