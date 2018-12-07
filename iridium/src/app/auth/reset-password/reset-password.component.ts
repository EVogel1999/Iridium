import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  resetInfo = {
    username: '',
    email: ''
  }

  resetError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  reset() {
    this.authService.resetPassword(this.resetInfo.username, this.resetInfo.email);
    if (this.authService.prevURL !== '/auth/sign-up' && this.authService.prevURL !== '/auth/sign-in')
      this.router.navigate([this.authService.prevURL]);
    else
      this.router.navigate(['']);
  }
}
