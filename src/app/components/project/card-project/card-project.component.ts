import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project/project';

@Component({
  selector: 'project-card',
  imports: [],
  templateUrl: './card-project.component.html',
})
export class CardComponent {
  @Input() projects!: Project[];
}
