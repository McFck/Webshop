import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.isLogged();
  }

  async isLogged() {
    const res = this.userService.isLoggedIn().subscribe(f => {
      if (!f.status) {
        this.router.navigate(['/shop']);
      } else {
        this.handleLogout();
      }
    });
  }

  async handleLogout() {
    const result: any = this.authService.logout().subscribe(result => {
      if (result) {
        this.router.navigate(['/shop']);
        window.location.reload();
      }
    });
  }

}
