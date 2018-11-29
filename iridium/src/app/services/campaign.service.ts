import { Injectable } from '@angular/core';
import { CAMPAIGNS } from '../../assets/mock-data/campaigns';
import { Campaign } from '../interfaces/campaign';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  campaigns: Campaign[];

  constructor() { 
    this.campaigns = CAMPAIGNS;
  }

  getCampaign(id: string): Observable<Campaign> {
    let result: Campaign = this.campaigns.find((val) => {
      if (val.id === id) {
        return true;
      }
    });
    return of(result);
  }
  
  getCampaigns(): Observable<Campaign[]> {
    return of(CAMPAIGNS);
  }
}
