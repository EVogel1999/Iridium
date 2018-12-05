import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  campaign: Campaign;
  sub: Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private service: CampaignService) { }

  ngOnInit() {
    this.sub = this.service.getCampaign(this.route.snapshot.params.id).subscribe(campaign => {
      this.campaign = campaign;
    });
    if (this.campaign === undefined)
      this.router.navigate(['/eventyrer/campaign/']);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
