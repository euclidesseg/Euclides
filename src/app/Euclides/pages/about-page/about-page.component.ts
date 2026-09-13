import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FocusAreasComponent } from "../../components/focus-areas/focus-areas.component";
import { StatisticsComponent } from '../../components/statistics-component/statistics.component';
import { RouterLink } from '@angular/router';

@Component({
  imports: [UpperCasePipe, FocusAreasComponent, StatisticsComponent, RouterLink],
  templateUrl: './about-page.component.html',
  styleUrl:'./about-page.component.css'
})
export default class AboutPageComponent { }
