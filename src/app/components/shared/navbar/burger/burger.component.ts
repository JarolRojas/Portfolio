import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { NavbarMenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'navbar-burger',
  templateUrl: './burger.component.html',
  imports: [NavbarMenuListComponent],
  styleUrls: ['./burger.component.css'],
})
export class NavBurgerComponent {
  @Input() isOpen!: () => boolean;
  @Input() toggleMenu!: () => void;
  @Input() closeMenu!: () => void;
  @ViewChild('burgerMenu', { static: false }) burgerMenu!: ElementRef;

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      this.isOpen() &&
      this.burgerMenu &&
      !this.burgerMenu.nativeElement.contains(target) &&
      !(target.closest('.hamburger'))
    ) {
      this.closeMenu();
    }
  }
}
