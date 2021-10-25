import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private authService: AuthService, private cookieService: CookieService, private router: Router) {
   }

  ngOnInit(): void {
    this.isLogged();
  }

  async isLogged() {
    const res = this.userService.isLoggedIn().subscribe(f=>{
      if (f.status) {
        this.router.navigate(['/shop']);
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
      window.location.reload();
    } else {
      alert("Не правильный логин или пароль");
    }
  }
}
