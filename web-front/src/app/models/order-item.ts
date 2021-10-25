import { CheckoutItem } from "./checkout-item";


export class OrderItem {
    public itemOrders: CheckoutItem[];

    public contact: string = "UNDEFINED";

    constructor(itemOrders: CheckoutItem[], contact: string) {
        this.itemOrders = itemOrders;
        this.contact = contact;
    }
}
