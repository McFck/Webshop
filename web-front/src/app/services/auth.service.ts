import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { postAuthRequestUrl } from 'src/config/api';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = false

  constructor(private http: HttpClient) { }

  authUser(user: User): Observable<Object> {
    const body = user;
    return this.http.post(postAuthRequestUrl, body, {withCredentials: true}); 
  }
  
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value
  }

  get isLoggedIn() {
    return this.loggedInStatus
  }

}
