
import { Injectable } from '@angular/core';
import { CartRepository } from '../repos/cart.repo';
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { Cart } from '@modules/cart/cart.module';
import { CartItem } from '@modules/cart/cart-item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private repo: CartRepository;

  constructor(private api: ApiService) {
    this.repo = new CartRepository(api);
  }

  getCartBySession(sessionId: string): Observable<Cart> {
    return this.repo.getCartBySession(sessionId);
  }

  addItem(cartId: number, item: CartItem) {
    return this.repo.addItem(cartId, item);
  }

  updateItem(itemId: number, payload: Partial<CartItem>) {
    return this.repo.updateItem(itemId, payload);
  }

  removeItem(itemId: number) {
    return this.repo.removeItem(itemId);
  }
}
/**
 *
 *  OrderRepository + OrderService, PaymentRepository + PaymentService.
 */
