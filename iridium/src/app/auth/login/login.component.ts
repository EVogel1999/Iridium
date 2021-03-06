import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginError = false;

  loginInfo = {
    username: '',
    password: ''
  };

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.loginInfo.username, this.loginInfo.password);
    if (this.authService.isLoggedIn) {
      this.loginError = false;
      if (this.authService.prevURL !== '/auth/sign-up' && this.authService.prevURL !== '/auth/reset-password')
        this.router.navigate([this.authService.prevURL]);
      else
        this.router.navigate(['']);
    }
    else
      this.loginError = true;
  }

}
