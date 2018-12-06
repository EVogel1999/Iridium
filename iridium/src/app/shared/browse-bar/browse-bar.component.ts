import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-browse-bar',
  templateUrl: './browse-bar.component.html',
  styleUrls: ['./browse-bar.component.css']
})
export class BrowseBarComponent implements OnInit {

  browseInfo = {
    query: ''
  }

  constructor() { }

  ngOnInit() {
  }

  browse() {
    
  }
}
