import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillSection } from '../../../interfaces/skill-section';

@Component({
  selector: 'skill-card',
  imports: [],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() SkillSection!: SkillSection[];

}
