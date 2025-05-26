import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-navbar-menu-list',
  imports: [NgClass, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './navbar-menu-list.component.html',
})
export class NavbarMenuListComponent {
  @Input() vertical = false;
  @Input() onOptionClick: (() => void) | null = null;

}
