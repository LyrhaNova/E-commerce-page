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
  providedIn: 'root',
})
export class CartService {
  // Subject pour la liste des articles du panier
  private cartItemsSubject = new BehaviorSubject<CartItem[]>([]);
  cartItems$ = this.cartItemsSubject.asObservable();

  // Subject pour la quantité totale
  private cartQuantitySubject = new BehaviorSubject<number>(0);
  cartQuantity$ = this.cartQuantitySubject.asObservable();

  constructor() {}

  /**
   * Ajoute un article au panier
   * @param item L'article à ajouter
   */
  addToCart(item: CartItem): void {
    const existingItemIndex = this.cartItemsSubject.value.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex > -1) {
      this.cartItemsSubject.value[existingItemIndex].quantity += item.quantity;
    } else {
      this.cartItemsSubject.next([...this.cartItemsSubject.value, item]);
    }
    this.updateCartQuantity();
  }

  /**
   * Supprime un article du panier
   * @param itemId L'ID de l'article à supprimer
   */
  removeFromCart(itemId: number): void {
    const currentItems = this.cartItemsSubject.value.filter(
      (item) => item.id !== itemId
    );
    this.cartItemsSubject.next([...currentItems]);

    // Met à jour la quantité totale
    this.updateCartQuantity();
  }

  /**
   * Retourne le prix total du panier
   */
  getTotalPrice(): number {
    return this.cartItemsSubject.value.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }

  /**
   * Méthode privée pour recalculer la quantité totale des articles
   */
  private updateCartQuantity(): void {
    const totalQuantity = this.cartItemsSubject.value.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    this.cartQuantitySubject.next(totalQuantity);
  }
}