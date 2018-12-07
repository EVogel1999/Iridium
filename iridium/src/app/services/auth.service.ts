import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Observable, of } from 'rxjs';
import { USERS } from '../../assets/mock-data/users'
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  prevURL: String = '';
  currentURL: String = '';
  user: User;
  isLoggedIn: boolean;
  users: User[];

  constructor(private router: Router) {
    this.user = undefined;
    this.isLoggedIn = false;
    this.users = USERS;

    this.currentURL = this.router.url;
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {        
        this.prevURL = this.currentURL;
        this.currentURL = event.url;
      };
    });
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
        library: [],
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

  resetPassword(username: string, email: string) {
    //To be implemented when I have written a backend API
  }

  addToLibrary(campID: string) {
    let idFound = this.user.library.find(val => {
      if (val === campID)
        return true;
    });
    if (idFound === undefined)
      this.user.library.push(campID);
  }

  removeFromLibrary(campID: string) {
    let id = -1;
    let camp = this.user.library.find(val => {
      id++;
      if (val === campID)
        return true;
    });
    if (camp !== undefined)
      this.user.library.splice(id, 1);
  }

  checkInLibrary(campID: string): Observable<boolean> {
    if (this.user !== undefined) {
      let idFound = this.user.library.find(val => {
        if (val === campID)
          return true;
      });
      return of(idFound !== undefined);
    }
    return of(false);
  }
}
