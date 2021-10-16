import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public valueObs = new BehaviorSubject<any>(null);

  public setValue(value: any):void {
    this.valueObs.next(value);
  }

  subject = new Subject<any>();

  constructor() { }

  sendMsg(item: any) {
    this.subject.next(item)
  }

  getMsg() : Observable<any> {
    return this.subject.asObservable()
  }
}