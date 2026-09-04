import { Component, computed, signal } from '@angular/core';
import { LucideAngularModule, LucidePanelsLeftBottom, PaletteIcon, CodeXmlIcon } from 'lucide-angular';

export interface Experience {
  id: number;

  company: string;
  role: string;

  startDate: string;
  endDate: string;

  description: string[];
  skills: string[];

  companyImage?: string;
  icon: 'panel' | 'palette' | 'code';
}


@Component({
  imports: [
    LucideAngularModule
  ],
  templateUrl: './experience-page.component.html',
})
export default class ExperiencePageComponent {

   PanelLeftBottom = computed(() => LucidePanelsLeftBottom);
   PaletteIcon = computed(() => PaletteIcon);
   CodeXmlIcon = computed(()=>CodeXmlIcon);

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
        'Desarrollé e implementé mejoras en la vista de documentos públicos para diferentes clientes gubernamentales, mejorando así la experiencia de usuario y la satisfacción del cliente.',
        'Desarrollé e implementé un componente de encuestas ciudadanas, junto con métricas y gráficas para seguimiento a las respuestas de los votantes.',
        'Realizé rediseño total del portal institucional Alcaldía Municipal de puerto Asís, Putumayo',
        'He realizado maquetación y mantenimiento de portales web, segun requerimientos del cliente',
      ],

      skills: ['HTML', 'CSS', 'JavaScript', 'Tailwind CSS', 'Datatables']
    },

    {
      id: 2,
      company: 'INTECOL S.A.S',
      role: 'Desarrollador JR',
      startDate: '16-06-2023',
      endDate: '19-09-2023',
      icon: 'code',

      description: [
        'Colaboración directa con el equipo para el análisis de requerimientos del cliente.',
        'Desarrollo de funcionalidades basadas en especificaciones técnicas.',
        'Manejo de peticiones HTTP y operadores RxJS para transformación de datos.',
        'Generación de reportes gráficos para presupuestos y producción.'
      ],

      skills: ['Angular', 'RxJS', 'TypeScript', 'HTTP']
    },

    {
      id: 3,
      company: 'INTECOL S.A.S',
      role: 'Ingeniero de Prácticas',
      startDate: '16-12-2022',
      endDate: '15-06-2023',
      icon: 'palette',

      description: [
        'Corrección de errores e implementación de funcionalidades frontend.',
        'Uso de Angular y PrimeNG para interfaces dinámicas.',
        'Versionamiento de código usando ramas en Azure DevOps.',
        'Trabajo bajo metodología ágil Scrum.'
      ],

      skills: ['Angular', 'PrimeNG', 'Scrum', 'Azure DevOps']
    },

    {
      id: 4,
      company: 'ALMACENES LA MEDIA NARANJA',
      role: 'Técnico de Sistemas',
      startDate: '12-02-2022',
      endDate: '15-12-2022',
      icon: 'panel',

      description: [
        'Soporte al programa maestro de ventas.',
        'Gestión y administración de bases de datos SQL.',
        'Mantenimiento preventivo y correctivo de equipos de cómputo.',
        'Capacitación a cajeros en todas las sedes.'
      ],

      skills: ['SQL', 'Soporte Técnico', 'Bases de Datos']
    }
  ]);
}
