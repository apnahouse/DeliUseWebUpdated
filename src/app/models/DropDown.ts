export class CompanyDrop {
  compId: number;
  companyName: string;
  companyType: number;
  productId: number;
  distributorId: number;
  orderId: number;
  vendorId: number;
  id: number;
  isProduct: number;
}

export class TargetDrop {
  targetId: number;
  targetName: string;
}
export class UserName {
  userId: number;
  fullName: string;
}
export class UserTypeDrop {
  userTypeId: number;
  userType: string;
}
export class AddressDrop {
  addressId: number;
  compId: number;
  addressType: number;
  addressName: string;
  country: number;
  state: number;
  city: number;
  addressTypeName: string;
  fullAddress: string;
}

export class companyDropdown {
  compId: number;
  companyName: string;
  companyType: number;
  companyEmail: string;
}

export class DistributorList {
  distributorId: number;
  distributorName: string;
}

export class submitMapping {
  id: number;
  compId: number;
  salesPersonId: number;
  distributorId: string;
  distributorList: DistributorList[];
  lastUpdatedBy: number;
}
