export class User {
  id: number;
  userId: number;
  firstName: string;
  lastName: string;
  fullname: string;
  mobileNo: string;
  email: string;
  pincode: number;
  country: number;
  countryName: string;
  stateName: string;
  cityName: string;
  state: number;
  city: number;
  address: string;
  landMark: string;
  fullAddress: string;
  userPassword: string;
  accountNo: string;
  bankName: string;
  ifscCode: string;
  userImage: any;
  aadharImage: any;
  isActive: boolean;
  userTypeId: number;
  userType: string;
  emailId: string;
  roleId: string;
  role: string;
  isWeb: boolean;
  isMobile: boolean;
  compId: number;
  companyName: string;
  addressId: number;
  roleType: number;
  companyType: number;
}

export class UserMasterResponse {
  responseCode: string;
  responseMessage: string;
  totalRows: number;
  details: User[];
}

export class Pages {
  pageId: number;
  viewRight: boolean;
}

export class RolepageRequest {
  Id: number;
}

export class FranchiseRequest {
  location: number;
}

export class RolePageResponse {
  responseCode: string;
  responseMessage: string;
  details: [];
}

export class UserType {
  id: number;
  userType: string;
}

/// Country
export class CountryDropDown {
  id: number;
  countryName: string;
}

/// State
export class StateDropDown {
  stateId: number;
  stateName: string;
}

export class CititesDropdown {
  cityId: number;
  cityName: string;
}

export class StateRequest {
  id: number;
}

export class CityRequest {
  stateId: number;
  countryId: number;
}
