import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-browse-bar',
  templateUrl: './browse-bar.component.html',
  styleUrls: ['./browse-bar.component.css']
})
export class BrowseBarComponent implements OnInit {

  browseInfo = {
    query: ''
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  search() {
    this.router.navigate(['/eventyrer/browse/', { query: this.browseInfo.query, currPage: 1 }]);
  }
  browseAll() {
    this.router.navigate(['eventyrer/browse/', { query: this.browseInfo.query, currPage: 1 }]);
  }
}
