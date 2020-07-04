import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractService } from '../services/farmer-search-abstract/farmer-search-abstract.service';
import { Farmer } from '../../model/farmer';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FarmersFirebaseService } from '../services/farmers-firebase/farmers-firebase.service';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {
  @Input() farmerSearchAbstractService: FarmerSearchAbstractService;
  @Output() onPartnerSelectedEvent = new EventEmitter();

  public searchTerm: string;
  public farmer: Farmer = new Farmer();

  constructor(private snackBar: MatSnackBar, private farmersFirebaseService: FarmersFirebaseService) { }

  ngOnInit(): void {}

  /**
   * This method retrieve data from firestore database
  */
  searchFarmer() {
    if(!this.searchTerm) return;

    this.farmersFirebaseService.getFarmers(this.searchTerm, 'name').subscribe(res => {

      if(!res.size) {
        this.snackBar.open('No matchs found', 'OK', {duration: 4000});
        this.farmer = new Farmer();
        return
      }
      
      res.forEach(async element => {
        const farmerResult = element.data();
        await farmerResult.address.get().then(a => {
          farmerResult.address = a.data();
        })

        await farmerResult.document.get().then(d => {
          farmerResult.document = d.data();
        })

        this.farmer = farmerResult as Farmer;
      });

    }, err => {
      console.error('error', err);
    })

    /*
    this.farmerSearchAbstractService.searchFarmers(this.searchTerm).then(res => {
      if (res.length) {
        this.farmer = res[0];
        this.onPartnerSelectedEvent.emit(this.farmer);
      } else {
        this.snackBar.open('No matchs found', 'OK', {duration: 4000});
      }
    }).catch(err => console.error(err))
    */
    
  }

}
