import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject, Subscription } from 'rxjs'
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {

  public valueObs = new BehaviorSubject<any>(null);

  public subs: Subscription[] = [];

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