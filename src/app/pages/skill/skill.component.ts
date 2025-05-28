import { Component } from '@angular/core';
import { SkillSection } from '../../interfaces/skill-section';
import { Skill3dComponent } from "../../components/skill/skill-3d/skill-3d.component";
import { CardComponent } from "../../components/skill/card/card.component";
import { TranslateModule } from '@ngx-translate/core';
import { NgClass } from '@angular/common';



@Component({
  selector: 'app-skill',
  imports: [Skill3dComponent, TranslateModule, NgClass, CardComponent],
  templateUrl: './skill.component.html',
})
export class SkillComponent {

  categories: SkillSection[] = [
    {
      category: 'SKILLS.FRONTEND',
      icon: 'fa-globe',
      skills: [
        { description: 'Angular', icon: 'angular', color: '#dd0031', link: 'https://angular.io/' },
        { description: 'HTML5', icon: 'html5', color: '#e34c26', link: 'https://developer.mozilla.org/es/docs/Web/HTML' },
        { description: 'CSS3', icon: 'css3', color: '#1572b6', link: 'https://developer.mozilla.org/es/docs/Web/CSS' },
        { description: 'JavaScript', icon: 'javascript', color: '#f7df1e', link: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
        { description: 'TypeScript', icon: 'typescript', color: '#3178c6', link: 'https://www.typescriptlang.org/' },
        { description: 'Bootstrap', icon: 'bootstrap' },
        { description: 'Tailwind CSS', icon: 'tailwind' },
      ]
    },
    {
      category: 'SKILLS.BACKEND',
      icon: 'fa-globe',
      skills: [
        { description: 'Python', icon: 'python' },
        { description: 'Node.js', icon: 'node' },
        { description: 'Java', icon: 'java' },


      ]
    },
    {
      category: 'SKILLS.DATABASES',
      icon: 'fa-database',
      skills: [
        { description: 'Database', icon: 'database', color: '#4479a1', link: 'https://www.mysql.com/' },


      ]
    }
  ];
}
