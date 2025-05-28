import { Component } from '@angular/core';
import { CardComponent } from "../../components/skill/card/card.component";
import { SkillCard } from '../../interfaces/skill-card';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-skill',
  imports: [CardComponent, NgFor],
  templateUrl: './skill.component.html',
  standalone: true,
})
export class SkillComponent {
  skillCards: SkillCard[] = [
    {
      category: 'SKILLS.FRONTEND',
      icon: 'fa-globe',
      skills: [
        { description: 'Angular', icon: 'fa-brands fa-angular' },
        { description: 'React', icon: 'fa-brands fa-react' },
      ]
    },

  ];
}
