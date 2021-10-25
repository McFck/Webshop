import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { verifyAuth } from 'src/config/api';

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
    var t = this.http.get<isLoggedIn>(verifyAuth, { withCredentials: true }); //headers: customHeaders
    return t;
  }
}
