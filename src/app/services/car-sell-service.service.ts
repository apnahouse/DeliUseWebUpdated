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

  getRealEsateUser() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetRealEsateUser`);
  }

  getAction() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetAction`);
  }

  getKindOfProperty() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetKindOfProperty`);
  }

  getPropertyType() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetPropertyType`);
  }

  getPropertyAge() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetPropertyAge`);
  }

  getPropertyFacing() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetPropertyFacing`);
  }

  getPropertyFloor() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetPropertyFloor`);
  }

  getPropertyAvailability() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetPropertyAvailability`);
  }

  getFurnishingType() {
    return this.httpClient.get<any>(`${this.url}/api/RealEstate/GetFurnishingType`);
  }

}
