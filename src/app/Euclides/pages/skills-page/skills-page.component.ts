import 'iconify-icon'
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, signal, CUSTOM_ELEMENTS_SCHEMA, computed } from '@angular/core';
import { FeelComponent } from '../../components/feel-component/feel.component';
import { EuclidesService } from '../../services/euclides.service';
import { CategorySkill, Skill } from '../../data/interface/skill.interface';
export interface CardItem {
  title: string;
  description: string;
}
@Component({
  selector: 'app-skills-page',
  imports: [CommonModule, FeelComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css',
})
export default class SkillsPageComponent{


  private euclidesService = inject(EuclidesService);

  filter = signal<CategorySkill>('Alls')

  skills = signal<Skill[]>(this.euclidesService.getSkills());

  filteredSkills = computed(() =>
    this.skills().filter(skill => this.filter()== 'Alls'? skill :skill.category === this.filter())
  )

  changeFilter(skill:CategorySkill):void{
    this.filter.set(skill);
  }


   readonly filterOptions: { label: string; value: CategorySkill }[] = [
    { label: 'Todas', value: 'Alls' },
    { label: 'Lenguajes', value: 'Lenguaje' },
    { label: 'Frontend', value: 'Frontend' },
    { label: 'Backend', value: 'Backend' },
    { label: 'Agentes', value: 'Agents' },
    { label: 'Herramientas', value: 'Tools' },
  ];

}
