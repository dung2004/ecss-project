import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from './cart-item.model';
import { CartRoutingModule } from './cart-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }

export interface Cart {
  id?: number;
  userId?: number | null;
  sessionId?: string | null;
  items?: CartItem[];
  status?: string;
}
