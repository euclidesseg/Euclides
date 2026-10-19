import {
  Component,
} from '@angular/core';

@Component({
  selector: 'app-resume-layout',
  imports: [],
  templateUrl: './resume-layout.component.html',
  styleUrl: './resume-layout.component.css',
})
export class ResumeLayoutComponent {
  printCv() {
    window.print();
  }

}
