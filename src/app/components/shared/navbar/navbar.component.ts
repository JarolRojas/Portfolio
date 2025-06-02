import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NavbarMenuListComponent } from "./menu-list/menu-list.component";
import { NavBurgerComponent } from './burger/burger.component';

@Component({
  selector: 'navbar',
  imports: [NavbarMenuListComponent, NavBurgerComponent],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
