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
  authSubUser: Subscription;
  authSubLibrary: Subscription;
  authorLink: string = '';
  isInLibrary: boolean = true;

  constructor(private route: ActivatedRoute, private router: Router, private service: CampaignService, private authService: AuthService) { }

  ngOnInit() {
    this.campSub = this.service.getCampaign(this.route.snapshot.params.id)
    .subscribe(campaign => {
      this.campaign = campaign;
    });
    if (this.campaign === undefined)
      this.router.navigate(['/eventyrer/campaign/']);
    this.authSubUser = this.authService.findUserByCampID(this.campaign.id)
    .subscribe(user => {
      if (user !== undefined)
        this.authorLink = user.username;
    });
    this.authSubLibrary = this.authService.checkInLibrary(this.campaign.id)
    .subscribe(val => {
      this.isInLibrary = val;
    })
  }

  addToLibrary() {
    this.authService.addToLibrary(this.campaign.id);
    this.isInLibrary = true;
  }

  removeFromLibrary() {
    this.authService.removeFromLibrary(this.campaign.id);
    this.isInLibrary = false;
  }

  ngOnDestroy() {
    this.campSub.unsubscribe();
    this.authSubUser.unsubscribe();
    this.authSubLibrary.unsubscribe();
  }

}
