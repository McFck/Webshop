import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { postAuthRequestUrl, verifyAuth } from 'src/config/api';
import { User } from '../models/user';

interface isLoggedIn {
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { 
  }

  isLoggedIn(): Observable<isLoggedIn> {
    var t = this.http.get<isLoggedIn>(verifyAuth, {withCredentials: true}); //headers: customHeaders
    return t;
  }
}
