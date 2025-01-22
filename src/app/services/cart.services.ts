import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartQuantitySubject = new BehaviorSubject<number>(0);
  cartQuantity$ = this.cartQuantitySubject.asObservable();

  constructor() {}

  // Ajoute une quantité au panier
  addToCart(quantity: number): void {
    const currentQuantity = this.cartQuantitySubject.value;
    this.cartQuantitySubject.next(currentQuantity + quantity);
  }
}
