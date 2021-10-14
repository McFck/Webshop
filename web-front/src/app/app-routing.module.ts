import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { ShoppingCartComponent } from "./components/shopping-cart/shopping-cart.component";
import { PageNotFoundComponent } from "./components/shared/page-not-found/page-not-found.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { SuccessComponent } from "./components/checkout/success/success.component";

const routes : Routes = [
    {path: '', redirectTo: '/shop', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'shop', component: ShoppingCartComponent},
    {path: 'checkout', component: CheckoutComponent},
    {path: 'checkout-success', component: SuccessComponent},
    {path: '**', component: PageNotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}