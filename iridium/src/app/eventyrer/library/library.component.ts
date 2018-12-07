import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CampaignService } from 'src/app/services/campaign.service';
import { Campaign } from 'src/app/interfaces/campaign';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  library: Campaign[] = [];

  campSub: Subscription;

  constructor(private authService: AuthService, private campService: CampaignService, private router: Router) { }

  ngOnInit() {
    if (this.authService.user !== undefined)
      this.campSub = this.campService.getCampaignFromArray(this.authService.user.library).subscribe(camps => {
        if (camps !== undefined)
          this.library = camps;
      });
    else
      this.router.navigate(['']);
  }

  ngOnDestroy() {
    if (this.campSub !== undefined)
      this.campSub.unsubscribe();
  }
}
