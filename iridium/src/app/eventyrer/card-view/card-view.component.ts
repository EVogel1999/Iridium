import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService } from '../../services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {
  campaign: Campaign;
  campSub: Subscription;
  authSub: Subscription;
  authorLink: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: CampaignService, private authService: AuthService) { }

  ngOnInit() {
    this.campSub = this.service.getCampaign(this.route.snapshot.params.id)
    .subscribe(campaign => {
      this.campaign = campaign;
    });
    if (this.campaign === undefined)
      this.router.navigate(['/eventyrer/campaign/']);
    this.authSub = this.authService.findUserByCampID(this.campaign.id)
    .subscribe(user => {
      this.authorLink = user.username;
    });
  }

  ngOnDestroy() {
    this.campSub.unsubscribe();
    this.authSub.unsubscribe();
  }

}
