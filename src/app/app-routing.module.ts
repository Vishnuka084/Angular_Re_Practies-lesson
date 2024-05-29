import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {OrderComponent} from "./components/order/order.component";
import {ProductComponent} from "./components/product/product.component";

const routes: Routes = [
  {path:'customer',component:CustomerComponent},
  {path:'order',component:OrderComponent},
  {path:'product',component:ProductComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
