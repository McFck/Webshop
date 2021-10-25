import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
import { ItemComponent } from './components/shopping-cart/item-list/item/item.component';
import { ItemListComponent } from './components/shopping-cart/item-list/item-list.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessComponent } from './components/checkout/success/success.component';
import { CookieService } from 'ngx-cookie-service';
import { LogoutComponent } from './components/logout/logout.component';
import { OrdersControlComponent } from './components/orders-control/orders-control.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    ShoppingCartComponent,
    CartComponent,
    CartItemComponent,
    ItemComponent,
    ItemListComponent,
    LoginComponent,
    PageNotFoundComponent,
    CheckoutComponent,
    SuccessComponent,
    LogoutComponent,
    OrdersControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
