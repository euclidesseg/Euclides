import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FocusAreasComponent } from "../../components/focus-areas/focus-areas.component";
import { StatisticsComponent } from '../../components/statistics-component/statistics.component';
import { RouterLink } from '@angular/router';
import { TechSkilsribbonComponent } from '../../components/tech-skills-ribbon-component/tech-skills-ribbon.component';

@Component({
  imports: [UpperCasePipe, FocusAreasComponent, StatisticsComponent, RouterLink, TechSkilsribbonComponent],
  templateUrl: './about-page.component.html',
  styleUrl:'./about-page.component.css'
})
export default class AboutPageComponent { }
