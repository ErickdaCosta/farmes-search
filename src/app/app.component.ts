import { Component } from '@angular/core';
import { FarmerSearchCommonService } from './services/farmer-search-common/farmer-search-common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'farmers-search';

  constructor(public farmerSearch: FarmerSearchCommonService) {}

  getPartner(partnerSelected) {
    console.log('partner', partnerSelected);
  }
  
}
