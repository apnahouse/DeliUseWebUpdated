export class LoginResponse {
  responseCode: string;
  responseMessage: string;
  data: LoginDetails;
}

export class LoginDetails {
  companyDetails: any;
}

export class LoginUser {
  email: string;
  password: string;
}
