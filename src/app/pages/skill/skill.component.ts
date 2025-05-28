import { Component, AfterViewInit } from '@angular/core';
import { CardComponent } from "../../components/skill/card/card.component";
import { SkillCard } from '../../interfaces/skill-card';
import { NgFor } from '@angular/common';

declare var TagCanvas: any;

@Component({
  selector: 'app-skill',
  imports: [CardComponent, NgFor],
  templateUrl: './skill.component.html',
  standalone: true,
})
export class SkillComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    try {
      TagCanvas.Start('logoCanvas', 'logoList', {
        reverse: true,
        depth: 0.9,
        maxSpeed: 0.03, // velocidad de auto-rotación aumentada
        minSpeed: 0.01, // velocidad mínima para que nunca se detenga
        fadeIn: 800,
        noSelect: true,
        imageMode: 'image',
        initial: [0.1, -0.1],
        zoom: 0.8,
        wheelZoom: false,
        dragThreshold: 0,
        dragControl: true, // permite mover con el ratón
        freezeActive: true, // detiene el movimiento automático mientras se arrastra
        // El movimiento automático se detiene mientras se arrastra
      });
    } catch (e: any) {
      console.error('TagCanvas error:', e);
    }
  }

  skillCards: SkillCard[] = [
    {
      category: 'SKILLS.FRONTEND',
      icon: 'fa-globe',
      skills: [
        { description: 'Angular', icon: 'angular' },
      ]
    }
  ];
}
