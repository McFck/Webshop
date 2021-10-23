import { CheckoutItem } from '../models/checkout-item';

export interface OrderResponse {
  contactNumber: string;
  dateCreated: string;
  id: number;
  numberOfItems: number;
  orderItems: CheckoutItem[];
  status: string;
  totalOrderPrice: number;
}
