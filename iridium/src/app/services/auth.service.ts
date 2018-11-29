import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { throwError } from 'rxjs';

import { USERS } from '../../assets/mock-data/users'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  isLoggedIn: boolean;
  users: User[];

  constructor() {
    this.user = null;
    this.isLoggedIn = false;
    this.users = USERS;
  }

  login(username: string, password: string) {
    this.users.forEach(user => {
      if (user.username === username && user.password === password) {
        this.user = user;
        this.isLoggedIn = true;
        console.log('User logged in: ' + this.isLoggedIn);
      }
    });
  }

  createUser(username: string, password: string, name: string) {
    this.users.forEach(user => {
      if (user.username === username)
        throwError(new Error);
    })
  }


}
