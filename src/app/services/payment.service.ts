import { Injectable } from '@angular/core';
import { PaymentRepository } from '../repos/payment.repo';
import { ApiService } from '../core/api.service';
import { Observable } from 'rxjs';
import { Payment } from '@modules/payment/payment.module';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private repo: PaymentRepository;

  constructor(private api: ApiService) {
    this.repo = new PaymentRepository(api);
  }

  createPayment(payload: Partial<Payment>): Observable<Payment> {
    return this.repo.createPayment(payload);
  }

  getPaymentById(paymentId: number): Observable<Payment> {
    return this.repo.getPaymentById(paymentId);
  }

  getPaymentsByOrder(orderId: number): Observable<Payment[]> {
    return this.repo.getPaymentsByOrder(orderId);
  }

  refundPayment(paymentId: number, reason?: string): Observable<any> {
    return this.repo.refundPayment(paymentId, reason);
  }

  updatePayment(paymentId: number, payload: Partial<Payment>): Observable<Payment> {
    return this.repo.updatePayment(paymentId, payload);
  }

  listPayments(params?: any): Observable<Payment[]> {
    return this.repo.listPayments(params);
  }
}
