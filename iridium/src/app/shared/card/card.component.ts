import { Component, OnInit, Input } from '@angular/core';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from '../../interfaces/campaign';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() campaign: Campaign = {
    id: '',
    name: '',
    description: '',
    author: '',
    date: ''
  };
  shown: any = {
    name: '',
    description: ''
  }

  constructor(private service: CampaignService) {
    console.log(this.campaign.description.length);
  }

  ngOnInit() {
    this.findShownDescription(this.campaign);
  }

  findShownDescription(campaign: any) {
    this.shown.description = campaign.description;
    this.shown.name = campaign.name;
    if (campaign.description.length > 270) {
      this.shown.description = campaign.description.substring(0, 270) + "...";
    }
    if (campaign.name.length > 22) {
      this.shown.name = campaign.name.substring(0, 22) + "...";
    }
  }

}
