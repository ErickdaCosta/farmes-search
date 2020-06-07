import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'farmer-search-card',
  templateUrl: './farmer-search-card.component.html',
  styleUrls: ['./farmer-search-card.component.css']
})
export class FarmerSearchCardComponent implements OnInit {

  public searchTerm: string;

  constructor() { }

  ngOnInit(): void {}

}
