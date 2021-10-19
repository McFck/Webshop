import { CheckoutComponent } from "../components/checkout/checkout.component";
import { CartItem } from "./cart-item";
import { CheckoutItem } from "./checkout-item";
import { Item } from "./item";

export class OrderItem {
    public itemOrders: CheckoutItem[];

    public contact: string = "UNDEFINED";

    constructor(itemOrders: CheckoutItem[], contact: string) {
        this.itemOrders = itemOrders;
        this.contact = contact;
    }
}
