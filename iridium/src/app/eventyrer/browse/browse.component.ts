import { Component, OnInit } from '@angular/core';
import { CampaignService } from 'src/app/services/campaign.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Campaign } from 'src/app/interfaces/campaign';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  campSub: Subscription;

  campaigns: Campaign[] = [];
  displayed: Campaign[] = [];
  pages: number[] = [];
  shownPages: number[] = [];
  currPage: number = 1;
  query = {
    oldQuery: '',
    newQuery: ''
  }

  constructor(private campService: CampaignService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.query.oldQuery = this.route.snapshot.params.query;
    this.search();
    this.campSub = this.campService.searchCampaigns(this.query.oldQuery).subscribe(camps => {
      if (camps !== undefined) {
        if (this.route.snapshot.params.currPage !== undefined)
          this.currPage = this.route.snapshot.params.currPage;
        this.campaigns = camps;
        this.displayed = this.campaigns.slice((6*this.currPage - 6), (6*this.currPage));
      }
    });
    let p = 0;
    this.pages = [];
    for (let i = 0; i < this.campaigns.length; i = i + 6) {
      p++;
      this.pages.push(p);
    }
    if (this.pages.length < 5)
      this.shownPages = this.pages;
    else
      this.shownPages = this.pages.slice(0, 5);
  }

  ngOnDestroy() {
    this.campSub.unsubscribe();
  }

  changePage(page: number) {
    this.currPage = page;
    this.router.navigate(['/eventyrer/browse/', { query: this.query.oldQuery, currPage: this.currPage }]);
    this.displayed = this.campaigns.slice((6*page - 6), (6*page));
  }

  search() {
    this.query.oldQuery = this.query.newQuery;
    this.campSub = this.campService.searchCampaigns(this.query.newQuery).subscribe(camps => {
      if (camps !== undefined) {
        if (this.route.snapshot.params.currPage !== undefined)
          this.currPage = this.route.snapshot.params.currPage;
        this.campaigns = camps;
        this.displayed = this.campaigns.slice((6*this.currPage - 6), (6*this.currPage));
      }
    });
    let p = 0;
    this.pages = [];
    for (let i = 0; i < this.campaigns.length; i = i + 6) {
      p++;
      this.pages.push(p);
    }
    if (this.pages.length < 5)
      this.shownPages = this.pages;
    else
      this.shownPages = this.pages.slice(0, 5);
  }

}
