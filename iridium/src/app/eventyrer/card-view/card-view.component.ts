import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  campaign: Campaign = {
    id: '',
    name: '',
    author: '',
    date: '',
    description: ''
  };;

  constructor(private route: ActivatedRoute, private router: Router, private service: CampaignService) { }

  ngOnInit() {
    let data: Campaign;
    this.service.getCampaign(this.route.snapshot.params.id).subscribe(val => {
      data = val;
    });
    if (data === undefined) {
      location.reload();
    }
    else {
      this.campaign = data;
      console.log(this.campaign);
    }
  }

}
