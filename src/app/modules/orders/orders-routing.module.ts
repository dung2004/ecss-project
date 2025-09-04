import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from '@modules/orders/pages/orders-list/orders-list.component';
import { CheckoutComponent } from '@modules/orders/pages/checkout/checkout.component';

const routes: Routes = [
  { path: '', component: OrdersListComponent },       
  { path: 'checkout', component: CheckoutComponent },
  { path: ':id', component: OrdersListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
