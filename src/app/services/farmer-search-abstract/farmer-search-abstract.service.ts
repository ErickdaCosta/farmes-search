import { Injectable } from '@angular/core';
import { Farmer } from '../../../model/farmer';

@Injectable({
  providedIn: 'root'
})
export abstract class FarmerSearchAbstractService {

  constructor() { }
  
  abstract searchFarmers(params: string): Promise<Farmer[]>;

}
