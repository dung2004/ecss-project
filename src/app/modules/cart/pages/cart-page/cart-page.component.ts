
import { Component, OnInit } from '@angular/core';
import { CartService } from '@services/cart.service';
import { Cart } from '@modules/cart/cart.module';

@Component({
  selector: 'app-cart-page',
  template: `
  <div *ngIf="cart">
    <h2>Giỏ hàng</h2>
    <div *ngFor="let it of cart.items">
      <div>{{it.productId}} - Số lượng: {{it.quantity}}</div>
    </div>
  </div>
  `
})
export class CartPageComponent implements OnInit {
  cart: Cart | null = null;
  sessionId = 'session-guest-1';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartService.getCartBySession(this.sessionId).subscribe(c => this.cart = c);
  }
}
