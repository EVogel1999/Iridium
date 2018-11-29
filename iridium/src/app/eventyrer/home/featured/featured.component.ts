import { Component, OnInit } from '@angular/core';
import { CampaignService } from '../../../services/campaign.service'
import { Campaign } from '../../../interfaces/campaign';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css']
})
export class FeaturedComponent implements OnInit {
  featured: Campaign[];

  constructor(private service: CampaignService) { }

  ngOnInit() {
    this.getCampaigns();
  }

  getCampaigns(): void {
    this.service.getCampaigns()
      .subscribe(campaigns => this.featured = campaigns.splice(0, 4));
  }

}
