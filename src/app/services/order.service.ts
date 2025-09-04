
import { Injectable } from '@angular/core';
import { OrderRepository } from '../repos/order.repo';
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { Order } from '@modules/orders/orders.module';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private repo: OrderRepository;

  constructor(private api: ApiService) {
    this.repo = new OrderRepository(api);
  }

  getOrdersByUser(userId: number): Observable<Order[]> {
    return this.repo.getOrdersByUser(userId);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.repo.getOrderById(orderId);
  }

  createOrder(orderPayload: Partial<Order>): Observable<Order> {
    return this.repo.createOrder(orderPayload);
  }

  updateOrder(orderId: number, payload: Partial<Order>): Observable<Order> {
    return this.repo.updateOrder(orderId, payload);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.repo.deleteOrder(orderId);
  }

  addOrderItem(orderId: number, item: any): Observable<any> {
    return this.repo.addOrderItem(orderId, item);
  }

  updateOrderItem(orderId: number, itemId: number, payload: any): Observable<any> {
    return this.repo.updateOrderItem(orderId, itemId, payload);
  }

  removeOrderItem(orderId: number, itemId: number): Observable<any> {
    return this.repo.removeOrderItem(orderId, itemId);
  }

  listOrders(params?: any): Observable<Order[]> {
    return this.repo.listOrders(params);
  }
}
