import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  isMenuOpen = false;

  openMenu(event: Event): void {
    event.stopPropagation(); // Empêche la propagation de l'événement de clic
    this.isMenuOpen = true;  // Ouvre le menu
  }

  closeMenu(): void {
    this.isMenuOpen = false;  // Ferme le menu
  }
}
