import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  constructor() {}

  // Ajoute un article au panier
  addToCart(item: CartItem): void {
    const existingItemIndex = this.cartItemsSubject.value.findIndex(
      (cartItem) => cartItem.id === item.id
    );
  
    if (existingItemIndex > -1) {
      // Met à jour la quantité si l'article existe déjà
      this.cartItemsSubject.value[existingItemIndex].quantity += item.quantity;
    } else {
      // Ajoute un nouvel article
      this.cartItemsSubject.next([...this.cartItemsSubject.value, item]);
    }
  }
  

  // Supprime un article du panier
  removeFromCart(itemId: number): void {
    const currentItems = this.cartItemsSubject.value.filter(item => item.id !== itemId);
    this.cartItemsSubject.next([...currentItems]);
  }

  // Retourne le total des articles
  getTotalQuantity(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.quantity, 0);
  }

  // Retourne le prix total
  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce((total, item) => total + item.price * item.quantity, 0);
  }
}

// import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class CartService {
//   private cartQuantitySubject = new BehaviorSubject<number>(0);
//   cartQuantity$ = this.cartQuantitySubject.asObservable();

//   constructor() {}

//   // Ajoute une quantité au panier
//   addToCart(quantity: number): void {
//     const currentQuantity = this.cartQuantitySubject.value;
//     this.cartQuantitySubject.next(currentQuantity + quantity);
//   }
// }
