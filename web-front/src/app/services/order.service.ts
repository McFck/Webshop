import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ordersUrl, postOrderUrl, updateOrderUrl } from 'src/config/api';
import { Order } from '../models/order';
import { OrderItem } from '../models/order-item';
import { OrderResponse } from './OrderResponse';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get<OrderResponse[]>(ordersUrl);
  }

  postData(order: OrderItem): Observable<Object> {
    const body = order;
    return this.http.post(postOrderUrl, body);
  }

  updateStatus(order: Order){
    return this.http.post(updateOrderUrl,order);
  }
}
