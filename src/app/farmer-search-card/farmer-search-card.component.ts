import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FarmerSearchAbstractService } from '../services/farmer-search-abstract/farmer-search-abstract.service';
import { Farmer } from '../../model/farmer';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private snackBar: MatSnackBar) { }

  ngOnInit(): void {}

  searchFarmer() {
    if(!this.searchTerm) return;

    this.farmerSearchAbstractService.searchFarmers(this.searchTerm).then(res => {
      if (res.length) {
        this.farmer = res[0];
        this.onPartnerSelectedEvent.emit(this.farmer);
      } else {
        this.snackBar.open('No matchs found', 'OK', {duration: 4000});
      }
    }).catch(err => console.error(err))
    
  }

}
