import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  meatball: boolean;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.meatball = false;
  }

  toggle() {
    this.meatball = !this.meatball;
  }

  signout() {
    if (this.authService.currentURL === ('/eventyrer/library/' + this.authService.user.username))
      this.router.navigate(['']);
    this.authService.logout();
    this.meatball = !this.meatball;
  }

}
