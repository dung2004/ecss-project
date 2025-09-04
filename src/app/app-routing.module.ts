import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'cart', loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule) },
  { path: 'orders', loadChildren: () => import('./modules/orders/orders.module').then(m => m.OrdersModule) },
  { path: '', redirectTo: '/cart', pathMatch: 'full' },
  { path: '**', redirectTo: '/cart' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
