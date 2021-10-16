import { CheckoutComponent } from "../components/checkout/checkout.component";
import { CartItem } from "./cart-item";
import { CheckoutItem } from "./checkout-item";
import { Item } from "./item";

export class OrderItem {
    public itemOrders: CheckoutItem[];


    constructor(itemOrders: CheckoutItem[]) {
        this.itemOrders = itemOrders;
    }
}
