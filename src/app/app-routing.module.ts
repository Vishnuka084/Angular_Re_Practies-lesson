import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "./components/notfound/notfound.component";

const routes: Routes = [
  {path:'', redirectTo:'/customer',pathMatch:'full'},
  { path: 'customer', loadChildren: () => import('./modules/customer/customer.module').then(m => m.CustomerModule) },
  { path: 'product', loadChildren: () => import('./modules/product/product.module').then(m => m.ProductModule) },
  { path: 'order', loadChildren: () => import('./modules/order/order.module').then(m => m.OrderModule) },
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
