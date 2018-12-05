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
      }
    });
  }

  createUser(username: string, password: string, name: string) {
    let error = false;
    this.users.forEach(user => {
      if (user.username === username) {
        error = true;
        throw(new Error('Username already in use'));
      }
    });
    if (!error) {
      let user: User = {
        id: (this.users.length + 1) + '',
        username: username,
        password: password,
        name: name,
        campaigns: []
      }
      this.users.push(user);
    }
  }

  logout() {
    if (this.user && this.isLoggedIn) {
      this.user = undefined;
      this.isLoggedIn = false;
    }
  }

}
