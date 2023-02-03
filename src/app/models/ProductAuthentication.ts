export class ProductAuthRequest {
  qrData: string;
  mobNo: string;
  usrname: string;
  askForDetailsFilled: boolean;
  email: string;
  verifiedBy: string;
  verificationMode: string;
  verificationType: number;
  deviceDetails: string;
  ipAdrs: string;
  usrlatitude: number;
  usrlongitude: number;
  usrAdrs: string;
  usrCity: string;
  usrState: string;
  usrCntry: string;
  usrZip: string;
  usrFeedback: string;
  scratchCd: string;
  purchasedFrm: string;
  mobOprator: string;
}

export class ProductAuthResponse {
  responseCode: string;
  responseMessage: string;
  data: ProdAuthData;
}

export class ProdAuthData {
  compDispNm: string;
  regNumber: string;
  batchNo: string;
  mfgDate: string;
  expDate: string;
  productNm: string;
  cautionSym: string[];
  symText: string;
  customerCareDetails: string;
  antidoteState: string;
  mktBy: string;
  gtn: string;
  productCatalogue: string;
  responseCode: string;
  responseMessage: string;
  verificationId: string;
}
