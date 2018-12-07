import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../../interfaces/user';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  authSub: Subscription;
  campSub: Subscription;
  userName: String = 'Friend';
  user: User = {
    id: '',
    username: '',
    name: '',
    password: '',
    bio: '',
    email: '',
    campaigns: [],
    library: []
  };
  campaigns: Campaign[] = [];

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute, private campService: CampaignService) { }

  ngOnInit() {
    if (this.authService.user)
      this.userName = this.authService.user.name;
    this.authSub = this.authService.findUserByUsername(this.route.snapshot.params.username).subscribe(user => {
      if (user !== undefined)
        this.user = user;
    });
    if (this.user !== undefined) {
      this.campSub = this.campService.getCampaignFromArray(this.user.campaigns).subscribe(camps => {
        if (camps !== undefined)
          this.campaigns = camps;
      });
    }
    if (this.user.id === '')
      this.router.navigate(['/eventyrer/profile/']);
  }

  ngOnDestroy() {
    this.authSub.unsubscribe();
    this.campSub.unsubscribe();
  }

}
