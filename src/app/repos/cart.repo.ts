
import { ApiService } from '../core/api.service';
import { Cart } from '@modules/cart/cart.module';
import { CartItem } from '@modules/cart/cart-item.model';
import { Observable } from 'rxjs';

export class CartRepository {
  constructor(private api: ApiService) { }

  getCartBySession(sessionId: string): Observable<Cart> {
    return this.api.get<Cart>(`/carts/session/${sessionId}`);
  }

  getCartByUser(userId: number): Observable<Cart> {
    return this.api.get<Cart>(`/carts/user/${userId}`);
  }

  addItem(cartId: number, item: CartItem) {
    return this.api.post(`/cart_items`, item);
  }

  updateItem(itemId: number, payload: Partial<CartItem>) {
    return this.api.put(`/cart_items/${itemId}`, payload);
  }

  removeItem(itemId: number) {
    return this.api.delete(`/cart_items/${itemId}`);
  }
}
