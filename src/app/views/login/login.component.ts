import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { LoginService } from 'src/app/services/login.service';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formRestPassword: FormGroup;
  resetFormSubmitted: boolean;
  emailReg: RegExp = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
  forgotPasswordMessage: string;

  //Login Propperties
  loginForm: FormGroup;
  submitted: boolean = false;
  isModalShown: boolean;
  mobileReg: RegExp = /^[6-9]\d{9}$/;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private msgService: MessageService,
    private auth: AuthServiceService,
    private LoginService: LoginService
  ) {
    this.initform();
    this.initResetPasswordForm();
  }

  ngOnInit(): void {}

  get f() {
    return this.loginForm.controls;
  }
  get freset() {
    return this.formRestPassword.controls;
  }

   
  initform() {
    this.loginForm = this.fb.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
       loginType: ['Web'],
    });
  }

  initResetPasswordForm() {
    this.formRestPassword = this.fb.group({
      emailId: [null, Validators.required],
    });
  }

  onResetPasswordSubmit() {
    this.resetFormSubmitted = true;
    if (this.formRestPassword.invalid) {
      return;
    }
    const form = { ...this.formRestPassword.value };
    this.forgotPassword(form.emailId);
    this.initResetPasswordForm();
  }

  forgotPassword(emailId: any) {
    this.LoginService.forgotPassword(emailId).subscribe((resp: any) => {
      this.forgotPasswordMessage = resp.responseMessage;
    });
  }

  closeResetPassModal() {
    this.resetForgotPassword();
    this.isModalShown = false;
  }

  resetForgotPassword() {
    this.resetFormSubmitted = false;
    this.initResetPasswordForm();
    const obj = this.freset;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        obj[key].setErrors(null);
      }
    }
  }

  onKeydown(event: any) {
    var invalidChars = ['-', '+', 'e'];

    if (invalidChars.includes(event.key)) {
      event.preventDefault();
    }
  }

  submitForm() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    this.checkUser(this.loginForm.value);
  }
  handleForgotPassword() {
    this.isModalShown = true;
  }

  checkUser(value: any) {
    this.LoginService.loginUser(value).subscribe(
      (userDetails: any) => {
        if (userDetails.responseCode === 200) {
          console.log(userDetails);
          localStorage.clear();
          localStorage['user'] = JSON.stringify(userDetails.data);
          localStorage['token'] = userDetails.data.token;
          localStorage['refreshToken'] = userDetails.data.refreshToken;
          this.auth.sendToken(userDetails.data.refreshToken);
          this.router.navigateByUrl('/dashboard');
        } else {
          this.msgService.add({
            severity: 'warn',
            summary: 'Warning',
            detail: userDetails.responseMessage,
          });
        }
      },
      (err: any) => {}
    );
  }
}
