import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { User } from '../models/masters/UserMaster';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url = environment.baseUrl;
  constructor(private router: Router, private httpClient: HttpClient) {}

  user(): User {
    if (localStorage['user']) {
      const userDetails: User = JSON.parse(localStorage['user']);
      return userDetails;
    }
    return null;
  }

  isLogged(): boolean {
    const token = this.getToken();
    if (token) {
      if (window.location.pathname === '/pa') {
        return false;
      }
      return true;
    }
    // this.router.navigate(["/login"]);
    return false;
  }

  getToken() {
    let token = localStorage.getItem('token');
    token = token ? token : '';
    return token;
  }

  changePassword(data: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/Login/ChangeUserPassword`,
      data
    );
  }

  signOut() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  loginUser(login: any): any {
    return this.httpClient.post<any>(`${this.url}/api/Login/Login`, login);
  }

  forgotPassword(emailId: any) {
    return this.httpClient.get<any>(
      `${this.url}/api/Login/ForgotPassword?emailId=${emailId}`
    );
  }

  getPagesById(role) {
    return this.httpClient.post<any>(
      `${this.url}/api/RoleMaster/PageGetAllByUser`,
      role
    );
  }

  checkRequestNo(reqNo: any) {
    return this.httpClient.get<any>(
      `${this.url}/api/CheckRequestNo?reqNo=${reqNo}`
    );
  }

  resetPassword(form: any) {
    return this.httpClient.post<any>(
      `${this.url}/api/Login/ResetPassword`,
      form
    );
  }
}
