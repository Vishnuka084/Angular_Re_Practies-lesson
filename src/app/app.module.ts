import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CustomerComponent} from './components/customer/customer.component';
import {ProductComponent} from './components/product/product.component';
import {OrderComponent} from './components/order/order.component';
import {NotfoundComponent} from './components/notfound/notfound.component';
import { NewCustomerComponent } from './components/customer/inner/new-customer/new-customer.component';
import { AllCustomersComponent } from './components/customer/inner/all-customers/all-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ProductComponent,
    OrderComponent,
    NotfoundComponent,
    NewCustomerComponent,
    AllCustomersComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
