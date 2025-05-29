import { Component } from '@angular/core';
import { Skill3dComponent } from "../../components/skill/skill-3d/skill-3d.component";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from "../../components/skill/card/card.component";
import { CategorySkill } from '../../interfaces/skill/skill.interface';
import { categoryMap } from '../../interfaces/skill/category.map';



@Component({
  selector: 'app-skill',
  imports: [Skill3dComponent, TranslateModule, CardComponent],
  templateUrl: './skill.component.html',
})
export class SkillComponent {
  categories: CategorySkill[] = Object.values(categoryMap);
}
