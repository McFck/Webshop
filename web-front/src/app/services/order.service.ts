import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { OrderItem } from '../models/order-item';
import { postOrderUrl } from 'src/config/api';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient){ }
 
  postData(order: OrderItem){
      const body = {itemOrders: order.itemOrders};
      console.log(order.itemOrders);
      return this.http.post(postOrderUrl, body); 
  }
}
