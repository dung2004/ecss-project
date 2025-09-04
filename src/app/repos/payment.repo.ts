
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { Payment } from '@modules/payment/payment.model';

export class PaymentRepository {
  constructor(private api: ApiService) { }

  createPayment(payload: Partial<Payment>): Observable<Payment> {
    return this.api.post<Payment>(`/payments`, payload);
  }

  getPaymentById(paymentId: number): Observable<Payment> {
    return this.api.get<Payment>(`/payments/${paymentId}`);
  }

  getPaymentsByOrder(orderId: number): Observable<Payment[]> {
    return this.api.get<Payment[]>(`/payments/order/${orderId}`);
  }

  updatePayment(paymentId: number, payload: Partial<Payment>): Observable<Payment> {
    return this.api.put<Payment>(`/payments/${paymentId}`, payload);
  }

  refundPayment(paymentId: number, reason?: string): Observable<any> {
    return this.api.post<any>(`/payments/${paymentId}/refund`, { reason });
  }

  listPayments(params?: any): Observable<Payment[]> {
    return this.api.get<Payment[]>(`/payments`, params);
  }
}
