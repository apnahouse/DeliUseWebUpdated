export class ZoneDropdown {
  id: number;
  zoneName: string;
  address: string;
}

export class UserTypeDropdown {
  id: number;
  userType: string;
}
export class AddressType {
  id: number;
  addressType: string;
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

export class CountryResponse {
  details: CountryDropDown[];
}

export class StateRequest {
  id: number;
}

export class CityRequest {
  stateId: number;
  countryId: number;
}

export class CititesDropdown {
  cityId: number;
  cityName: string;
}

export class AllCompanyDropDown {
  cityId: number;
  cityName: string;
}

export class dropRequest {
  userId: number;
  compId: number;
}
