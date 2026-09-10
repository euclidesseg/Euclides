import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FocusAreasComponent } from "../../components/focus-areas/focus-areas.component";

@Component({
  imports: [UpperCasePipe, FocusAreasComponent],
  templateUrl: './about-page.component.html',
  styleUrl:'./about-page.component.css'
})
export default class AboutPageComponent { }
