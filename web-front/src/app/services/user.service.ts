import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postAuthRequestUrl } from 'src/config/api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  authUser(user: User): Observable<Object> {
    const body = user;
    return this.http.post(postAuthRequestUrl, body); 
  }
}
