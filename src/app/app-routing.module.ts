import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {OrderComponent} from "./components/order/order.component";
import {ProductComponent} from "./components/product/product.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";
import {NewCustomerComponent} from "./components/inner/new-customer/new-customer.component";
import {AllCustomersComponent} from "./components/inner/all-customers/all-customers.component";

const routes: Routes = [
  {path: '', redirectTo: '/customer', pathMatch: 'full'},
  {
    path: 'customer', component: CustomerComponent, children: [
      {path:'new',component:NewCustomerComponent},
      {path:'list',component:AllCustomersComponent},
    ]
  },
  {path: 'order', component: OrderComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: '**', component: NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
