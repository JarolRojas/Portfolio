import { Component, Input, OnInit } from '@angular/core';
import { SkillCard } from '../../../interfaces/skill-card';
import { NgFor, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'skill-card',
  imports: [NgFor, NgClass, TranslateModule],
  templateUrl: './card.component.html',
  standalone: true,
})
export class CardComponent implements OnInit {
  @Input() card!: SkillCard;

  ngOnInit() {
    console.log('CardComponent recibido:', this.card);
  }
}
