import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  isMenuOpen = false;
  isCartOpen = false;
  cartQuantity: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // Observer la quantité d'articles dans le panier
    this.cartService.cartQuantity$.subscribe((quantity) => {
      this.cartQuantity = quantity;
    });
  }

  openMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen = true;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  toggleCart(event: Event): void {
    event.stopPropagation();
    this.isCartOpen = !this.isCartOpen;
    console.log('Panier ouvert:', this.isCartOpen);
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
      console.log('Panier fermé');
    }
  }
}
