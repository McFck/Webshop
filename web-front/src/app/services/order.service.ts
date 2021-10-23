import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../models/order-item';
import { ordersUrl, postOrderUrl } from 'src/config/api';
import { Observable } from 'rxjs';
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
}
