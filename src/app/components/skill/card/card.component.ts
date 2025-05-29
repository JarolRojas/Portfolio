import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { CategorySkill } from '../../../interfaces/skill/skill.interface';

@Component({
  selector: 'skill-card',
  imports: [NgClass, TranslateModule],
  templateUrl: './card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() categories!: CategorySkill[];

}
