import { Component, OnInit } from '@angular/core';
import { Order } from '@modules/orders/orders.module';
import { OrderService } from '@services/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-list',
  template: `
    <div class="orders-page">
      <h2>Đơn hàng của bạn</h2>

      <div *ngIf="loading">Đang tải danh sách đơn hàng...</div>

      <div *ngIf="!loading && orders?.length === 0">
        Bạn chưa có đơn hàng nào.
      </div>

      <ul *ngIf="!loading && orders?.length">
        <li *ngFor="let o of orders" class="order-item">
          <div>
            <strong>#{{ o.orderNo || o.id }}</strong>
            — Trạng thái: {{ o.status || 'N/A' }}
          </div>
          <div>Tổng: {{ o.totalAmount | number:'1.0-0' }}</div>
          <div>Ngày: {{ o.placedAt ? (o.placedAt | date:'short') : '-' }}</div>
          <button (click)="viewOrder(o)">Xem</button>
        </li>
      </ul>

      <div style="margin-top:1rem;">
        <button (click)="goCheckout()">Thanh toán / Tạo đơn mới</button>
      </div>
    </div>
  `,
  styles: [`
    .order-item { padding: 8px; border-bottom: 1px solid #eee; margin-bottom: 6px; }
  `]
})
export class OrdersListComponent implements OnInit {
  orders: Order[] = [];
  loading = false;
  userId = 1; //cần chỉnh lại sau

  constructor(private orderService: OrderService, private router: Router) { }

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders() {
    this.loading = true;
    this.orderService.getOrdersByUser(this.userId).subscribe({
      next: (res) => { this.orders = res || []; this.loading = false; },
      error: (err) => { console.error(err); this.loading = false; }
    });
  }

  viewOrder(order: Order) {
    this.router.navigate(['/orders', order.id]);
  }

  goCheckout() {
    this.router.navigate(['/orders/checkout']);
  }
}
