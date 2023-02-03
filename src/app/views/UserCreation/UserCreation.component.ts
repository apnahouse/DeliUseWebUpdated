import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import {
  AddressDrop,
  CompanyDrop,
  UserTypeDrop,
} from 'src/app/models/DropDown';
import { RoleResponse } from 'src/app/models/masters/Role';
import { User } from 'src/app/models/masters/UserMaster';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-UserCreation',
  templateUrl: './UserCreation.component.html',
  styleUrls: ['./UserCreation.component.css'],
})
export class UserCreationComponent implements OnInit {
  usrForm: FormGroup;
  display: boolean;
  form1Submitted = false;
  listUserType: any[] = [];
  IsDisabled: boolean;

  isShow: boolean;
  listitems: any[];
  listCompany: any[] = [];

  userImges = [];
  aadharImges = [];
  IsDisabled2: boolean;
  listCompAddress: AddressDrop[] = [];
  mobileReg: RegExp = /^[6-9]\d{9}$/;
  emailReg: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  nameReg: RegExp = /^[a-zA-Z\s]*$/;
  accReg: RegExp = /^\d{9,18}$/;
  tmpF = [];
  columns: { field: string; header: string }[];
  ControlIsActive: boolean;
  approveButton: boolean = true;
  userMaster1: any = [];
  userMaster: User;
  userdata: User = new User();
  totalRecords: number;
  loading: boolean;
  event: any;
  EditMode: boolean;
  controlDisableWeb: boolean;
  controlDisabledMobile: boolean;
  private subscriptions: Subscription[] = [];
  constructor(
    private formBuilder: FormBuilder,
    //private usermaster: UserMasterService,
    private messageService: MessageService,
    //private DropDown: DropdownService,
    private loginService: LoginService //private role: RoleMasterService
  ) {
    this.initForm();
    this.userMaster = this.loginService.user();
    this.columns = [
      { field: 'fullName', header: 'User Name' },
      { field: 'userType', header: 'User Type' },
      { field: 'companyName', header: 'Company Name' },
      { field: 'mobileNo', header: 'Mobile No.' },
      { field: 'email', header: 'Email' },
      { field: 'fullAddress', header: 'Address' },
    ];
  }

  initForm(): void {
    this.usrForm = this.formBuilder.group({
      id: [0],
      userTypeId: [null, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      mobileNo: ['', Validators.required],
      email: [''],
      userImage: [''],
      userPassword: [null, Validators.required],
      roleId: [null, Validators.required],
      isActive: [true],
      isBlocked: [true],
      isVerified: [true],
      compId: [null, Validators.required],
      addressId: [null, Validators.required],
    });

    this.listUserType = [
      { userTypeId: 1, userType: 'User' },
      { userTypeId: 2, userType: 'Agent' },
    ];
    this.userMaster1 = [
      {
        fullName: 'Ayuhsi Aggrawal',
        userType: 'Agent',
        companyName: 'Deli Use',
        mobileNo: '9898989898',
        email: 'Ayuhsi@mail.com',
        fullAddress: 'Near Lotus Temple, New Delhi, India, 121002',
        isActive: true,
      },
    ];
  }
  ngOnInit() {
    this.companyDropDown();
    this.UserTypeDroDown();
    this.roledropdown();
  }

  get f() {
    return this.usrForm.controls;
  }

  //Company Name Drop Down
  companyDropDown() {
    this.Addressrequest.compId = this.userMaster.compId;
    this.listCompany = [
      { compId: 1, companyName: 'Deli Use' },
      { compId: 2, companyName: 'Deli Use' },
    ];
    // this.DropDown.getDistributorCompanyDrop(this.Addressrequest).subscribe(
    //   (response: any) => {
    //     this.listCompany = response.details;
    //   }
    // );
  }

  roledropdown() {
    // this.role.getRoleName().subscribe((response: RoleResponse) => {
    //   this.listitems = response.data;
    // });
  }

  //UserType DropDown
  UserTypeDroDown() {
    this.listUserType = [{ userTypeId: 1, userType: 'User' }];
    // this.DropDown.getUserTypeDropdown().subscribe((Response: any) => {
    //   this.listUserType = Response.details;
    // });
  }
  //Add user
  showDialog() {
    this.display = true;
    this.ControlIsActive = true;
    this.initForm();
    this.isShow = false;
    this.IsDisabled = false;
    this.approveButton = true;
    // this.IsDisabled2 = false;
    this.EditMode = false;
    this.controlDisableWeb = false;
    this.aadharImges = [];
    this.userImges = [];
    if (this.userMaster.compId == 1) {
      this.IsDisabled2 = false;
    } else {
      this.usrForm.patchValue({
        compId: this.listCompany.find(
          (r) => r.compId == this.userMaster.compId
        ),
      });

      this.Addressrequest.compId = this.userMaster.compId;
      // this.DropDown.getAddressDropDown(this.Addressrequest).subscribe(
      //   (Response: any) => {
      //     this.listCompAddress = Response.details;
      //   }
      // );
      this.IsDisabled2 = true;
    }
  }

  removeImg(imgSrc) {
    this.userImges = this.userImges.filter((m) => m !== imgSrc);
  }

  //edit User
  editDialog(row: User) {
    this.isShow = true;
    this.ControlIsActive = false;
    this.IsDisabled = true;
    this.approveButton = false;
    this.IsDisabled2 = true;
    this.EditMode = true;
    this.display = true;
    this.userImges = row.userImage ? row.userImage : [];
    this.aadharImges = row.aadharImage ? row.aadharImage : [];

    this.usrForm.controls['userPassword'].clearValidators();
    this.usrForm.controls['userPassword'].updateValueAndValidity();
    this.usrForm.controls['userPassword'].patchValue(null);
  }

  OnUserTypeChange($event) {}

  Addressrequest: CompanyDrop = new CompanyDrop();
  GetAdressOnCompany() {
    const raw = { ...this.usrForm.getRawValue() };
    this.Addressrequest.compId = raw.compId.compId;
    // this.DropDown.getAddressDropDown(this.Addressrequest).subscribe(
    //   (Response: any) => {
    //     this.listCompAddress = Response.details;
    //   }
    // );
  }
  //on Key down
  onKeydown(event: any) {
    var invalidChars = ['-', '+', 'e', '.'];
    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  }
  onUploadProdImg(event: any) {
    const response = this.uploadLoadFile(event);
    if (response) {
      if (response.responseCode === '200') {
        if (this.userImges.length > 0) {
          this.messageService.add({
            severity: 'error',
            summary: 'HSA Error',
            detail: 'You can Upload Only One Image',
          });
        } else {
          this.userImges.push(response.source);
        }
      } else {
        this.messageService.add({
          severity: 'error',
          summary: 'HSA Error',
          detail: response.responseMessage,
        });
      }
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'HSA Error',
        detail: 'Something went wrong',
      });
    }
  }

  uploadLoadFile(event: any) {
    if (event.originalEvent) {
      if (event.originalEvent.body) {
        const body = event.originalEvent.body;
        return body;
      }
      return null;
    }
    return null;
  }

  onBeforeUpload(event: any) {}

  showdivWeb() {
    const rawForm = { ...this.usrForm.getRawValue() };
    if (rawForm.isWeb == true && rawForm.isMobile == true) {
      this.controlDisableWeb = false;
      this.controlDisabledMobile = false;
      this.usrForm.controls['roleId'].setValidators(Validators.required);
      this.usrForm.controls['roleId'].updateValueAndValidity();
    } else if (rawForm.isMobile == true && rawForm.isWeb == false) {
      this.controlDisabledMobile = false;
      this.controlDisableWeb = true;
      this.usrForm.controls['roleId'].clearValidators();
      this.usrForm.controls['roleId'].updateValueAndValidity();
      this.usrForm.controls['roleId'].reset();
    } else if (rawForm.isMobile == false && rawForm.isWeb == false) {
      this.controlDisabledMobile = true;
      this.controlDisableWeb = true;
      this.usrForm.controls['roleId'].clearValidators();
      this.usrForm.controls['roleId'].updateValueAndValidity();
      this.usrForm.controls['roleId'].reset();
    } else if (rawForm.isMobile == true) {
      this.controlDisabledMobile = false;
      this.controlDisableWeb = true;
      this.usrForm.controls['roleId'].clearValidators();
      this.usrForm.controls['roleId'].updateValueAndValidity();
    } else if (rawForm.isWeb == true) {
      this.controlDisabledMobile = true;
      this.controlDisableWeb = false;
      this.usrForm.controls['roleId'].setValidators(Validators.required);
      this.usrForm.controls['roleId'].updateValueAndValidity();
    } else {
      this.controlDisabledMobile = true;
      this.controlDisableWeb = true;
    }
  }

  //get Load lazy
  loadLazy(event) {
    this.event = event;
    const obj = this.getLazyLoadingValues(this.event);
    this.getUser(obj);
  }

  getLazyLoadingValues(event: any): any {
    const obj = {
      first: event.first + 1,
      searchValue: event.globalFilter ? event.globalFilter : '',
      multiSortMeta: event.multiSortMeta,
      pageSize: event.rows,
      sortColumn: event.sortField,
      sortOrder: event.sortOrder === 1 ? 'ASC' : 'DESC',
      isActive: '%',
      compId: this.userMaster.compId,
    };
    return obj;
  }

  // Get Table Data
  getUser(event: any): any {
    // this.subscriptions.push(
    //   this.usermaster.getAllCompanyUser(event).subscribe(
    //     (response: any) => {
    //       if (response.responseCode === '200') {
    //         response.details.forEach(function (user1) {
    //           if (user1.userImage) {
    //             user1.userImage = JSON.parse(user1.userImage);
    //           } else {
    //             user1.userImage = [];
    //           }
    //         });
    //         this.userMaster1 = response.details;
    //         this.totalRecords = response.totalRows;
    //         this.userMaster1 = this.userMaster1.slice();
    //       } else {
    //       }
    //     },
    //     (err) => {}
    //   )
    // );
  }

  //Create/Submit Button
  onSubmit() {
    this.form1Submitted = true;
    if (this.usrForm.invalid) {
      return;
    }
    const rawForm = { ...this.usrForm.getRawValue() };
    if (!this.EditMode) {
      // if (!rawForm.userPassword) {
      //   this.usrForm.controls.userPassword.setErrors({ required: true });
      //   return;
      // }
    }
    // If User doesn't upload image
    if (this.userImges == null || this.userImges.length == 0) {
      this.messageService.add({
        severity: 'error',
        summary: 'HSA Error',
        detail: 'Upload User Image',
      });
      return;
    } else {
      //User Image
      rawForm.userImage =
        this.userImges.length > 0 ? JSON.stringify(this.userImges) : null;
      rawForm.userTypeId = rawForm.userTypeId.userTypeId;
      rawForm.compId = rawForm.compId.compId;
      rawForm.addressId = rawForm.addressId.addressId;
      rawForm.firstName = rawForm.firstName.trim();
      rawForm.lastName = rawForm.lastName.trim();
      rawForm.addressId = rawForm.addressId;
      rawForm.registerMode = 'Web';
      rawForm.location = 'In Office';
      rawForm.lastUpdatedBy = this.userMaster.userId;
      rawForm.roleId = rawForm.roleId ? JSON.stringify(rawForm.roleId) : null;
      if (rawForm.userPassword != null) {
        this.usercreation1(rawForm);
      } else {
        this.usercreation(rawForm);
      }
    }
  }

  //Send User Password To Email Id
  usercreation1(value: any) {
    // this.subscriptions.push(
    //   this.usermaster.createCompanyUser(value).subscribe((response: any) => {
    //     this.userdata = response.data;
    //     if (response.responseCode === '200') {
    this.onHidden();

    //       const obj = this.getLazyLoadingValues(this.event);
    //       this.getUser(obj);
    //       if (value.email != 0) {
    //         this.sendPassword(value);
    //       }
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Success',
    //         detail: response.responseMessage,
    //       });
    //     } else {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'HSA Error',
    //         detail: response.responseMessage,
    //       });
    //     }
    //   })
    // );
  }

  usercreation(value: any) {
    // this.subscriptions.push(
    //   this.usermaster.createCompanyUser(value).subscribe((response: any) => {
    //     this.userdata = response.data;
    //     if (response.responseCode === '200') {
    this.onHidden();
    //       const obj = this.getLazyLoadingValues(this.event);
    //       this.getUser(obj);
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Success',
    //         detail: response.responseMessage,
    //       });
    //     } else {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'HSA Error',
    //         detail: response.responseMessage,
    //       });
    //     }
    //   })
    // );
  }
  onHidden() {
    this.display = false;
    this.initForm();
  }

  //Send Password
  sendPassword(value: any) {
    // this.subscriptions.push(
    //   this.usermaster.getPassword(value).subscribe((response: any) => {
    //     if (response.responseCode === '200') {
    //       this.messageService.add({
    //         severity: 'success',
    //         summary: 'Success',
    //         detail: response.responseMessage,
    //       });
    //     } else {
    //       this.messageService.add({
    //         severity: 'error',
    //         summary: 'HSA Error',
    //         detail: response.responseMessage,
    //       });
    //     }
    //   })
    // );
  }
}
