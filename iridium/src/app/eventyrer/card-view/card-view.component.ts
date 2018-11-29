import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  campaign: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: CampaignService) { }

  ngOnInit() {
    this.service.getCampaign(this.route.snapshot.params.id).subscribe(val => {
      this.campaign = val;
    });
  }

}
