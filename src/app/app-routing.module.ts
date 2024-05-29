import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "./components/customer/customer.component";
import {OrderComponent} from "./components/order/order.component";
import {ProductComponent} from "./components/product/product.component";
import {NotfoundComponent} from "./components/notfound/notfound.component";

const routes: Routes = [
  {path:'',redirectTo:'/customer',pathMatch:'full'},
  {path:'customer',component:CustomerComponent},
  {path:'order',component:OrderComponent},
  {path:'product/:id',component:ProductComponent},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
