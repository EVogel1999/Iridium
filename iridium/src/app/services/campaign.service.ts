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
      if (val.id === id)
        return true;
    });
    return of(result);
  }
  
  getCampaigns(): Observable<Campaign[]> {
    return of(this.campaigns);
  }

  getCampaignFromArray(ids: string[]): Observable<Campaign[]> {
    let result = [];
    ids.forEach(id => {
      let camp: Campaign = this.campaigns.find(camp => {
        if (camp.id === id)
          return true;
      });
      result.push(camp);
    });
    return of(result);
  }

  searchCampaigns(query: string): Observable<Campaign[]> {
    if (query === '' || query === undefined || query === 'undefined')
      return of(this.campaigns);

    let result = [];
    this.campaigns.forEach(camp => {
      if (camp.author === query || camp.name === query)
        result.push(camp);
    });
    return of(result);
  }
}
