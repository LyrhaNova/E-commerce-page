import { Component, HostListener } from '@angular/core';
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
  isCartOpen = false;

  openMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen = true;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleCart(event: Event): void {
    event.stopPropagation(); // Empêche la propagation du clic pour que le HostListener ne ferme pas le panier
    this.isCartOpen = !this.isCartOpen;
    console.log('Panier ouvert:', this.isCartOpen); // Vérifiez l'état du panier
  }

  // Fermer le panier lorsqu'on clique en dehors
  @HostListener('document:click', ['$event'])
  closeCartOnOutsideClick(event: MouseEvent): void {
    const cartElement = document.querySelector('.navbar__cart-content');
    const cartButton = document.querySelector('.navbar__cart-button');
    const target = event.target as HTMLElement;

    // Si on clique en dehors du panier ET du bouton
    if (cartElement && cartButton && !cartElement.contains(target) && !cartButton.contains(target)) {
      this.isCartOpen = false;
      console.log('Panier fermé'); // Vérifiez la fermeture
    }
  }
}