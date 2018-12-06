import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userInfo: any = {
    username: '',
    password: '',
    name: '',
    check: '',
    email: ''
  }
  errorMessages: any = {
    create: '',
    username: '',
    password: ''
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  createUser() {
    let passCheck = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    try {
      this.errorMessages.create = '';
      this.errorMessages.username = '';
      this.errorMessages.password = '';

      //Form validation
      if (this.userInfo.username.length < 6) {
        console.log("Error with username length");
        this.errorMessages.username = 'Username is not at least 6 characters';
        throw(new Error('Form is invalid'));
      }
      if (!passCheck.exec(this.userInfo.password)) {
        console.log("Error with password");
        this.errorMessages.password = 'Password is not 8 characters long, contains 1 lowercase, uppercase, number, and special character';
        throw(new Error('Form is invalid'));
      }

      this.errorMessages.create = '';
      if (this.userInfo.password === this.userInfo.check) {
        this.authService.createUser(this.userInfo.username, this.userInfo.password, this.userInfo.name, this.userInfo.email);
        this.authService.login(this.userInfo.username, this.userInfo.password);
        this.router.navigate(['']);
      }
      else
        this.errorMessages.create = 'Passwords are not the same';
    } catch(e) {
      this.errorMessages.create = e.message;
    }
  }

}
