import { Component, computed, signal } from '@angular/core';
import { Experience } from '../../data/interface/experience.interface';



@Component({
  selector: 'app-experience-page',
  imports: [],
  templateUrl: './experience-page.component.html',
  styleUrl:'./experience-page.component.css'
})
export default class ExperiencePageComponent {
  experiences = signal<Experience[]>([
    {
      id: 1,
      company: '101 SOFTWARE S.A.S',
      role: 'Desarrollador',
      startDate: '20-09-2023',
      endDate: 'Actualidad',
      icon: 'panel',
      companyImage: '',
      description: [
        'Desarrollo e implementación de mejoras en la visualización de documentos públicos para diferentes clientes gubernamentales, optimizando la experiencia de usuario.',
        'Desarrollo de un componente de encuestas ciudadanas con métricas y gráficas para el seguimiento de las respuestas.',
        'Rediseño del portal institucional de la Alcaldía Municipal de Puerto Asís, Putumayo.',
        'Maquetación y mantenimiento de portales web según los requerimientos de cada cliente.',
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'DataTables'],
    },
    {
      id: 2,
      company: 'INTECOL S.A.S',
      role: 'Desarrollador JR',
      startDate: '16-06-2023',
      endDate: '19-09-2023',
      icon: 'code',
      description: [
        'Colaboración directa con el equipo de desarrollo para analizar los requerimientos de los clientes.',
        'Desarrollo de funcionalidades a partir de especificaciones técnicas.',
        'Gestión de peticiones HTTP y utilización de operadores RxJS para transformar datos.',
        'Generación de reportes gráficos relacionados con presupuestos y producción.',
      ],
      skills: ['Angular', 'RxJS', 'TypeScript', 'HTTP'],
    },
    {
      id: 3,
      company: 'INTECOL S.A.S',
      role: 'Ingeniero de Prácticas',
      startDate: '16-12-2022',
      endDate: '15-06-2023',
      icon: 'palette',
      description: [
        'Corrección de errores e implementación de funcionalidades en el frontend.',
        'Construcción de interfaces dinámicas utilizando Angular y PrimeNG.',
        'Gestión de versiones y ramas de código mediante Azure DevOps.',
        'Participación en equipos de trabajo bajo la metodología ágil Scrum.',
      ],
      skills: ['Angular', 'PrimeNG', 'Scrum', 'Azure DevOps'],
    },
    {
      id: 4,
      company: 'ALMACENES LA MEDIA NARANJA',
      role: 'Técnico de Sistemas',
      startDate: '12-02-2022',
      endDate: '15-12-2022',
      icon: 'panel',
      description: [
        'Soporte técnico al sistema de gestión de ventas.',
        'Administración y gestión de bases de datos SQL.',
        'Mantenimiento preventivo y correctivo de equipos de cómputo.',
        'Capacitación a cajeros de las diferentes sedes.',
      ],
      skills: ['SQL', 'Soporte Técnico', 'Bases de Datos'],
    },
  ]);

  selectedExperienceId = signal<number>(1);

  selectedExperience = computed(() =>
     this.experiences().find(
        experience => experience.id === this.selectedExperienceId(),
      ) ?? this.experiences()[0],
  );

  selectExperience(id: number): void {
    this.selectedExperienceId.set(id);
  }
}
