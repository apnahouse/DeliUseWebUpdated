import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarSellService {
  url = environment.baseUrl;

  constructor(private router: Router, private httpClient: HttpClient) {}
  SaveCarSell(data: any) {
    return this.httpClient.post<any>(`${this.url}/api/Car/SellCar`, data);
  }

  SaveElectronicsSell(data: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/Electronics/SellElectronics`,
      data
    );
  }
  SaveFurnitureSell(data: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/Furniture/SellFurniture`,
      data
    );
  }
  SaveMobileSell(data: any) {
    return this.httpClient.post<any>(`${this.url}/api/Mobile/SellMobile`, data);
  }
  SaveMotorCycleSell(data: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/MotorCycle/SellMotorCycle`,
      data
    );
  }
  SavePropertySell(data: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/RealEstate/SellProperty`,
      data
    );
  }
}
