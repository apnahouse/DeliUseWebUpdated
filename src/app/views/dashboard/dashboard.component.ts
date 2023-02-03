import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { Chart } from 'chart.js';
import { DashBoardData, record } from 'src/app/models/Dashboard';
import { User } from 'src/app/models/masters/UserMaster';
import { DashBoardService } from 'src/app/services/dash-board.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  recorddata: record = new record();
  dashBoardData: DashBoardData[] = [];
  items: dashboard[];
  date: any;
  userMaster: User;
  date1: any;
  date2: any;
  date3: any;
  form1: FormGroup;
  totalIssued: string = '0';
  verifications: string = '0';
  totalMobileUsers: string = '0';
  minimumDate: any;
  options: any;
  products: any;
  istrue:boolean;
  constructor(
    private dashboarddata: DashBoardService,
    private fb: FormBuilder,
    private datePipe: DatePipe,
    private loginService: LoginService
  ) {
    this.date = new Date();
    this.date1 = new Date().setDate(this.date.getDate() - 1);
    this.date2 = new Date().setDate(this.date.getDate() - 7);
    this.date3 = new Date().setDate(this.date.getDate() - 30);
    this.items = [
      { id: 0, label: 'Today', icon: 'pi pi-fw pi-home', value: this.date },
      {
        id: 1,
        label: 'Yesterday',
        icon: 'pi pi-fw pi-calendar',
        value: this.date1,
      },
      {
        id: 2,
        label: 'Last 7 Days',
        icon: 'pi pi-fw pi-pencil',
        value: this.date2,
      },
      {
        id: 3,
        label: 'Last 30 Days',
        icon: 'pi pi-fw pi-file',
        value: this.date3,
      },
    ];
    this.initForm1();
  }

  slides = [
    { img: '../../../assets/img/banner1.png' },
    { img: '../../../assets/img/banner2.jpg' },
    { img: '../../../assets/img/banner3.png' },
    { img: '../../../assets/img/banner4.png' },
    { img: '../../../assets/img/banner5.png' },
  ];
  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    dots: 'true',
    autoplaySpeed: 1000,
    speed: 1400,
    infinite: true,
  };
  ngOnInit(): void {
    debugger;
    this.userMaster = this.loginService.user();
    if(this.userMaster!=null)
    {
       this.istrue=false
    }
    else{
      this.istrue=true;
    }
    this.customDate();
    this.dashboarddata.getDashBoardData().subscribe((resp: any) => {
      this.dashBoardData = resp.details;
      console.log(this.dashBoardData);
    });
  }

  initForm1(): any {
    this.form1 = this.fb.group({
      date: [
        { id: 0, label: 'Today', icon: 'pi pi-fw pi-home', value: this.date },
      ],
    });
  }

  //custom date
  customDate() {
    const rawForm = { ...this.form1.getRawValue() };
    const duration = {
      duration: this.datePipe.transform(rawForm.date.value, 'dd-MMM-yyyy'),
    };
    this.dashboarddata.getDashboardCards(duration).subscribe((resp: any) => {
      // this.totalIssued = resp.details.totalIssued;
      this.verifications = resp.details.verifications;
      this.totalMobileUsers = resp.details.totalMobileUsers;
    });
  }
}

export class dashboard {
  id: number;
  label: string;
  icon: string;
  value: any;
}
