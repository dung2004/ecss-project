
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { Order } from '@modules/orders/orders.module';

export class OrderRepository {
  constructor(private api: ApiService) { }

  getOrdersByUser(userId: number): Observable<Order[]> {
    return this.api.get<Order[]>(`/orders/user/${userId}`);
  }

  getOrderById(orderId: number): Observable<Order> {
    return this.api.get<Order>(`/orders/${orderId}`);
  }

  createOrder(payload: Partial<Order>): Observable<Order> {
    return this.api.post<Order>(`/orders`, payload);
  }

  updateOrder(orderId: number, payload: Partial<Order>): Observable<Order> {
    return this.api.put<Order>(`/orders/${orderId}`, payload);
  }

  deleteOrder(orderId: number): Observable<any> {
    return this.api.delete<any>(`/orders/${orderId}`);
  }

  addOrderItem(orderId: number, item: any): Observable<any> {
    return this.api.post<any>(`/orders/${orderId}/items`, item);
  }

  updateOrderItem(orderId: number, itemId: number, payload: any): Observable<any> {
    return this.api.put<any>(`/orders/${orderId}/items/${itemId}`, payload);
  }

  removeOrderItem(orderId: number, itemId: number): Observable<any> {
    return this.api.delete<any>(`/orders/${orderId}/items/${itemId}`);
  }

  listOrders(params?: any): Observable<Order[]> {
    return this.api.get<Order[]>(`/orders`, params);
  }
}
