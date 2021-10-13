import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  subject = new Subject<any>()

  constructor() { }

  sendMsg(item: any) {
    this.subject.next(item)
  }

  getMsg() : Observable<any> {
    return this.subject.asObservable()
  }
}