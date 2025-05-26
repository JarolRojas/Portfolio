import { Component, signal } from '@angular/core';
import { NavbarMenuListComponent } from "./navbar-menu-list/navbar-menu-list.component";
import { NavBurgerComponent } from "./navbar-burger/navbar-burger.component";

@Component({
  selector: 'app-navbar',
  imports: [NavbarMenuListComponent, NavBurgerComponent],
  templateUrl: './navbar.component.html',
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
