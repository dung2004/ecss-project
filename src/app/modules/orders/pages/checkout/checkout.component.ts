import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrderService } from '@services/order.service';
import { Router } from '@angular/router';
import { PaymentService } from '@services/payment.service';

import { Order } from '@modules/orders/orders.module';
import { Payment } from '@modules/payment/payment.module';

@Component({
  selector: 'app-checkout',
  template: `
    <div class="checkout-page">
      <h2>Checkout</h2>

      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div>
          <label>Họ tên nhận hàng</label>
          <input formControlName="fullName" />
        </div>

        <div>
          <label>Địa chỉ giao hàng</label>
          <textarea formControlName="shippingAddress"></textarea>
        </div>

        <div>
          <label>Thanh toán bằng</label>
          <select formControlName="paymentMethod">
            <option value="credit_card">Credit Card</option>
            <option value="bank_transfer">Bank transfer</option>
            <option value="cod">COD</option>
          </select>
        </div>

        <div>
          <label>Tổng tiền</label>
          <input formControlName="totalAmount" type="number" />
        </div>

        <div style="margin-top: 12px;">
          <button type="submit" [disabled]="form.invalid || submitting">Đặt hàng & Thanh toán</button>
        </div>
      </form>

      <div *ngIf="message" style="margin-top:10px">{{ message }}</div>
    </div>
  `,
  styles: [`
    form div { margin-bottom: 8px; }
  `]
})
export class CheckoutComponent {
  form: FormGroup;
  submitting = false;
  message = '';

  userId = 1; //cần chỉnh sửa lại

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      shippingAddress: ['', Validators.required],
      paymentMethod: ['credit_card', Validators.required],
      totalAmount: [0, [Validators.required, Validators.min(0.01)]]
    });
  }

  onSubmit() {
    if (this.form.invalid) return;
    this.submitting = true;
    this.message = '';


    const orderPayload: Partial<Order> = {
      userId: this.userId,
      status: 'placed',
      totalAmount: this.form.value.totalAmount,
      shippingAddress: this.form.value.shippingAddress,
      billingAddress: this.form.value.shippingAddress,
      items: []
    };

    this.orderService.createOrder(orderPayload).subscribe({
      next: (order) => {
        const pay: Partial<Payment> = {
          orderId: order.id as number,
          userId: this.userId,
          amount: order.totalAmount || this.form.value.totalAmount,
          method: this.form.value.paymentMethod,
          status: 'pending'
        };

        this.paymentService.createPayment(pay).subscribe({
          next: (paymentRes) => {
            this.message = 'Tạo đơn thành công. OrderId=' + order.id;
            this.submitting = false;
            this.router.navigate(['/orders']);
          },
          error: (err) => {
            console.error(err);
            this.message = 'Lỗi khi tạo payment';
            this.submitting = false;
          }
        });

      },
      error: (err) => {
        console.error(err);
        this.message = 'Lỗi khi tạo order';
        this.submitting = false;
      }
    });
  }
}
