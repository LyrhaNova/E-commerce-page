import { Component } from '@angular/core';
import { CartService, CartItem } from '../services/cart.services';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  quantity = 0;

  // Exemple de données de l'article
  product: Partial<CartItem> = {
    id: 1,
    name: 'Fall Limited Edition Sneakers',
    price: 125.00,
    imageUrl: 'assets/images/image-product-1-thumbnail.jpg',
  };

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
    if (this.quantity > 0) {
      const item: CartItem = {
        ...this.product,
        quantity: this.quantity,
      } as CartItem;
      this.cartService.addToCart(item);
    }
  }
}


// import { Component } from '@angular/core';
// import { CartService } from '../services/cart.services';

// @Component({
//   selector: 'app-purchase',
//   templateUrl: './purchase.component.html',
//   styleUrls: ['./purchase.component.scss']
// })
// export class PurchaseComponent {
//   quantity = 0;

//   constructor(private cartService: CartService) {}

//   increaseQuantity(): void {
//     this.quantity++;
//   }

//   decreaseQuantity(): void {
//     if (this.quantity > 0) {
//       this.quantity--;
//     }
//   }

//   addToCart(): void {
//     this.cartService.addToCart(this.quantity);
//   }
// }

