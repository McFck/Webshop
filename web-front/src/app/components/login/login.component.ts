import { StringMap } from '@angular/compiler/src/compiler_facade_interface';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private userService: UserService, private authService: AuthService, private cookieService: CookieService) { }

  ngOnInit(): void {
    this.isLogged();
  }

  async isLogged() {
    const res = this.userService.isLoggedIn().subscribe(f=>{
      if (f.status) {
        console.log("USER LOGGED IN!");
      } else {
        console.log("USER NOT LOGGED IN!");
      }
    });
    
  }

  login() {
    this.checkUser(new User(this.model['username'], this.model['password']));
  }

  async checkUser(user: User) {
    const result: any = await this.authService.authUser(user).toPromise();
    if (result['result']) {
      console.log("SUCCESS");
      this.authService.setLoggedIn(true);
      localStorage.setItem('token', result['id']);
      this.cookieService.set( 'token', result['id'] );
    } else {
      console.log("DENIED");
    }
  }
}
