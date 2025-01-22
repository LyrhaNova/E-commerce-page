import { Component } from '@angular/core';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  quantity = 0;

  constructor(private cartService: CartService) {}

  increaseQuantity(): void {
    this.quantity++;
  }

  decreaseQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }

  addToCart(): void {
    this.cartService.addToCart(this.quantity);
  }
}

