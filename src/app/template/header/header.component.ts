import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: any;
  username: string;
  ishide:boolean;
  isshow:boolean;
  constructor(
    private auth: AuthService,
    private loginService: LoginService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.user = this.loginService.user();
   // this.username = this.user.firstName + ' ' + this.user.lastName;
    if(this.user!=null)
    {
      this.ishide=true;
       this.isshow=false;
    }
    else{
     this.ishide=false;
      this.isshow=true;
    }
  }
  changePassword() {
    this.route.navigate(['changepassword']);
  }

  login(){
    this.route.navigate(['login']);
  }

  profile(){
    this.route.navigate(['profile']);
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('LoggedInUser');
  }
}
