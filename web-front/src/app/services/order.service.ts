import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { OrderItem } from '../models/order-item';
import { postOrderUrl } from 'src/config/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient){ }
 
  postData(order: OrderItem) : Observable<Object> {
      const body = order;
      return this.http.post(postOrderUrl, body); 
  }
}
