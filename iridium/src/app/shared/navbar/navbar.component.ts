import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  meatball: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.meatball = false;
  }

  toggle() {
    this.meatball = !this.meatball;
  }

  signout() {
    this.authService.logout();
    this.meatball = !this.meatball;
  }

}
