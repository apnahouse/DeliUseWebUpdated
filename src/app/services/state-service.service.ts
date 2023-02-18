import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  url = environment.baseUrl;

  constructor(private router: Router, private httpClient: HttpClient) {}
  getStates() {
    return this.httpClient.get<any>(`${this.url}/api/Admin/GetStates`);
  }
}
