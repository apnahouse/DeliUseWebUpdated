import { Component, OnInit } from '@angular/core';
import { RolePageResponse, User } from 'src/app/models/masters/UserMaster';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  user: User;
  menu: any;
  mainMenuItems: any = [];
  subMenuItems: any = [];
  constructor(
    private loginService: LoginService,
    private shared: ApiServiceService
  ) {}

  ngOnInit(): void {
    this.user = this.loginService.user();
    if (localStorage['token'] === 'admin@co.in') {
      // this.getMenu1({ roleId: '0' });
      // this.shared.navbar.subscribe(() => {
      //   this.getMenu1({ roleId: '0' });
      // });
    } else {
      this.getMenu({
        role: this.user.role, // ? JSON.stringify(this.user.role) : null
      });
      this.shared.navbar.subscribe(() => {
        this.getMenu({
          role: this.user.role, // ? JSON.stringify(this.user.role) : null,
        });
      });
    }
  }

  getMenu(obj: any) {
    this.loginService.getPagesById(obj).subscribe(
      (roles: any) => {
        if (roles.responseCode === '200') {
          console.log(roles);
          this.menu = roles;
          localStorage['menu'] = JSON.stringify(this.menu);
          this.mainMenuItems = this.menu.details.filter(
            (menu) => menu.parentId === 0
          );
          this.subMenuItems = this.menu.details.filter(
            (menu) => menu.parentId !== 0
          );
        } else {
        }
      },
      (err) => {}
    );
  }

  //For Default (Admin)User with Default Email and password(permisssions)
  getMenu1(obj: any) {
    this.loginService.getPagesById(obj).subscribe(
      (roles: RolePageResponse) => {
        if (roles.responseCode === '200') {
          this.menu = roles;
          localStorage['menu'] = JSON.stringify(this.menu);
          this.mainMenuItems = this.menu.details.filter(
            (menu) => menu.parentId === 0
          );

          this.subMenuItems = this.menu.details.filter(
            (menu) => menu.parentId !== 0
          );
        } else {
        }
      },
      (err) => {}
    );
  }
}
