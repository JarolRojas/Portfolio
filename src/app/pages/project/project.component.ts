import { Component } from '@angular/core';
import { Project, ProjectStatus } from '../../interfaces/project';
import { statusMap } from '../../interfaces/project'; // Asegúrate de importar statusMap si existe

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
})
export class ProjectComponent {
  projects: Project[] = [
    {
      title: 'Portfolio',
      description: 'Mi portafolio personal, donde muestro mis proyectos y habilidades.',
      year: 2023,
      status: statusMap[ProjectStatus.PROGRESS],
      imageUrl: '/assets/images/portfolio.png',
      imageAlt: 'Imagen del portafolio',
      githubUrl: '',
      skills:[]
    }
  ];
}
