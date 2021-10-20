import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {}

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  login() {
    this.checkUser(new User(this.model['username'],this.model['password']));
  }

  async checkUser(user: User) {
    const result = await this.userService.authUser(user).toPromise();
    if(result){
      user.isAdmin = true;
      console.log("SUCCESS");
    } else {
      console.log("ERROR");
    }
  }
}
