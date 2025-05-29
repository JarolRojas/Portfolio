import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { SkillSection } from '../../../interfaces/skill-section';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'skill-card',
  imports: [NgClass, TranslateModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() categories!: SkillSection[];

}
