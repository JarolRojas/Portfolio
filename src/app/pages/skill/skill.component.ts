import { Component, OnInit } from '@angular/core';
import { Skill3dComponent } from "../../components/skill/skill-3d/skill-3d.component";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from "../../components/skill/card/card.component";
import { SkillsService, SkillCategory } from '../../Services/skills.service';

@Component({
  selector: 'app-skill',
  imports: [Skill3dComponent, TranslateModule, CardComponent],
  templateUrl: './skill.component.html',
})
export class SkillComponent implements OnInit {
  categories: SkillCategory[] = [];

  constructor(private skillsService: SkillsService) {}

  ngOnInit() {
    this.skillsService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
}
