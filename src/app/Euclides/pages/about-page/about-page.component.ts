import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  imports: [UpperCasePipe],
  templateUrl: './about-page.component.html',
  styleUrl:'./about-page.component.css'
})
export default class AboutPageComponent { }
