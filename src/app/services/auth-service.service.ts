import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthServiceService {
  constructor(private router: Router) {}

  sendToken(token: string) {
    sessionStorage.setItem('LoggedInUser', token);
  }

  getToken() {
    return sessionStorage.getItem('LoggedInUser');
  }

  isLogedIn() {
    return this.getToken();
  }

  logout() {
    sessionStorage.removeItem('LoggedInUser');
    this.router.navigate(['/login']);
  }
}
