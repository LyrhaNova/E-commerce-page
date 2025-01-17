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

  toggleMenu() {
    console.log('Menu toggled'); // Ajoute cette ligne pour le débogage
    this.isMenuOpen = !this.isMenuOpen;
  }
}
