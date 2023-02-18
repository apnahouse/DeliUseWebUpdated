import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  url = environment.baseUrl;

  constructor(private router: Router, private httpClient: HttpClient) {}
  getCity(state) {
    return this.httpClient.post<any>(
      `${this.url}/api/Admin/GetCityByState`,
      state
    );
  }
}
