import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { USERS } from '../../assets/mock-data/users'
import { Campaign } from '../interfaces/campaign';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: User;
  isLoggedIn: boolean;
  users: User[];

  constructor() {
    this.user = undefined;
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

  createUser(username: string, password: string, name: string, email: string) {
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
        campaigns: [],
        bio: '',
        email: email
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

  findUserByCampID(campid: string): Observable<User> {
    let result: User = this.users.find(val => {
      let campIDFound = false;
      val.campaigns.forEach(camp => {
        if (camp === campid)
          campIDFound = true;
      });
      if (campIDFound)
        return true;
    });
    return of(result);
  }

  findUserByUsername(username: string): Observable<User> {
    let result: User = this.users.find(val => {
      if (val.username === username)
        return true;
    });
    return of(result);
  }

}
