import { Component } from '@angular/core';
import { SkillSection } from '../../interfaces/skill-section';
import { Skill3dComponent } from "../../components/skill/skill-3d/skill-3d.component";
import { TranslateModule } from '@ngx-translate/core';
import { CardComponent } from "../../components/skill/card/card.component";



@Component({
  selector: 'app-skill',
  imports: [Skill3dComponent, TranslateModule, CardComponent],
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
        { description: 'Bootstrap', icon: 'bootstrap', color: '#563d7c', link: 'https://getbootstrap.com/' },
        { description: 'Tailwind CSS', icon: 'tailwind', color: '#38bdf8', link: 'https://tailwindcss.com/' },
        { description: 'Bulma', icon: 'bulma', color: '#00d1b2', link: 'https://bulma.io/' },

      ]
    },
    {
      category: 'SKILLS.BACKEND',
      icon: 'fa-globe',
      skills: [
        { description: 'Python', icon: 'python', color: '#3776ab', link: 'https://www.python.org/' },
        { description: 'Node.js', icon: 'node', color: '#339933', link: 'https://nodejs.org/' },
        { description: 'Java', icon: 'java', color: '#007396', link: 'https://www.java.com/' },
        { description: 'Visual Basic (NET)', icon: 'visual', color: '#5c2d91', link: 'https://visualstudio.microsoft.com/' },



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
