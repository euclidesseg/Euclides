import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { FeelComponent } from '../../components/feel-component/feel.component';
import { EuclidesService } from '../../services/euclides.service';
import { Skill } from '../../data/interface/skill.interface';
export interface CardItem {
  title: string;
  description: string;
}
@Component({
  selector: 'app-skills-page',
  imports: [CommonModule, FeelComponent],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css',
})
export default class SkillsPageComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.skills())
  }

  private euclidesService = inject(EuclidesService);

  filter = signal<String>('Todas')

  skills = signal<Skill[]>(this.euclidesService.getSkills());

  

}
