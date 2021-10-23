import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { SuccessComponent } from "./components/checkout/success/success.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { OrdersControlComponent } from "./components/orders-control/orders-control.component";

const routes : Routes = [
    {path: '', redirectTo: '/shop', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'shop', component: ShoppingCartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'checkout-success', component: SuccessComponent},
    {path: 'orders-control', component: OrdersControlComponent},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}