import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  isAuthenticated: boolean = false

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.isLogged();
  }

  async isLogged() {
    const res = this.userService.isLoggedIn().subscribe(f => {
      if (f.status) {
        this.isAuthenticated = true;
      }
    });
  }
}
