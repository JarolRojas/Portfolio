import { Component, Input } from '@angular/core';
import { Project } from '../../../interfaces/project';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() projects!: Project[];
}
