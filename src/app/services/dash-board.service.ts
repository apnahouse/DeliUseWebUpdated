import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DashBoardService {
  url = environment.baseUrl;

  constructor(private router: Router, private httpClient: HttpClient) {}
  getDashboardCards(duration: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/DashBoard/GetDashboardCards`,
      duration
    );
  }

  getDashBoardData() {
    return this.httpClient.post<any>(
      `${this.url}/api/DashBoard/GetDashboardData`,
      null
    );
  }
}
