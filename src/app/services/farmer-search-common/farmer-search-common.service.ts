import { Injectable } from '@angular/core';
import { FarmerSearchAbstractService } from '../farmer-search-abstract/farmer-search-abstract.service';
import { Farmer } from '../../../model/farmer'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FarmerSearchCommonService extends FarmerSearchAbstractService{

  constructor(private http: HttpClient) {
    super()
  }

  searchFarmers(params: string): Promise<Farmer[]> {
    return this.http.get<Farmer[]>(`http://192.168.1.10:3000/?q=${params}`).toPromise();
  }
}
