import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from '@modules/orders/pages/orders-list/orders-list.component';
import { CheckoutComponent } from '@modules/orders/pages/checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    OrdersListComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
export interface OrderItem {
  productId: number;
  quantity: number;
  unitPrice?: number;
  customization?: any;
}

export interface Order {
  id?: number;
  orderNo?: string;
  userId?: number;
  status?: string;
  totalAmount?: number;
  shippingAddress?: string;
  billingAddress?: string;
  items?: OrderItem[];
  placedAt?: string;
}
