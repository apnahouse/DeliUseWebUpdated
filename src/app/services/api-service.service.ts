import { HttpClient } from '@angular/common/http';
import { Output } from '@angular/core';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiServiceService {
  @Output() navbar: EventEmitter<any> = new EventEmitter();
  modalConfig = {
    show: true,
    ignoreBackdropClick: true,
  };
  devUrl = environment.baseUrl;
  constructor(private http: HttpClient) {}

  getApi(url: string) {
    return this.http.get(`${this.devUrl}${url}`);
  }
  postApi(body: any, url: string) {
    return this.http.post(`${this.devUrl}${url}`, body);
  }
  refreshNavBar() {
    this.navbar.emit();
  }
}
