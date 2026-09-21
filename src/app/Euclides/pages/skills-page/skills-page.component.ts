import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
export interface CardItem {
  title: string;
  description: string;
}
@Component({
  selector: 'app-skills-page',
  imports: [CommonModule],
  templateUrl: './skills-page.component.html',
  styleUrl: './skills-page.component.css',
})
export default class SkillsPageComponent {@Input() row1: CardItem[] = [
    { title: 'Sitio web de...', description: 'Sitio web de portafolio de desarrolladores' },
    { title: 'Conexión Cívica', description: 'Plataforma de denuncia de problemas cívicos e...' },
    { title: 'Proyecto Alpha', description: 'Plataforma web escalable y modular' }
  ];

  @Input() row2: CardItem[] = [
    { title: 'Credenz’26', description: 'Plataforma oficial de gestión de eventos' },
    { title: 'Sistema de gestión...', description: 'Sistema de gestión sanitaria' },
    { title: 'Chat App', description: 'Aplicación de chat en tiempo real' }
  ]; }
