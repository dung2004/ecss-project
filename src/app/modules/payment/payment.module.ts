export interface Payment {
  id?: number;
  orderId: number;
  userId?: number;
  amount: number;
  method?: string;
  status?: string;
  transactionId?: string;
  paidAt?: string;
}
