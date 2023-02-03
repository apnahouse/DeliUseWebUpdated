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
  companyName: string;
  compId: string;
  genuineAudio: string;
  productId: string;
  productName: string;
  compLogo: string;
  productImg: string[];
  productRating: string;
  totalRating: string;
  loyaltyMsg: string;
  similarProducts: SimilarProducts[];
  socialLinks: SocialLinks[];
  verificationId: string;
}
export class ProdSpecification {
  key: string;
  value: string;
}
export class SimilarProducts {
  productImg: string[];
  prodSpecification: ProdSpecification[];
  productRating: string;
  totalRating: string;
  productNm: string;
  isRating: string;
}
export class SocialLinks {
  key: string;
  value: string;
}

export class ProductRatingResponse {
  responseCode: string;
  responseMessage: string;
  data: ProductRating;
}

export class ProductRating {
  ratingId: number;
  compId: string;
  productId: string;
  proRating: string;
  totalRatingCount: string;
  updatedBy: string;
  updatedDt: string;
  verificationId: string;
}

export class GetUserVerification {
  productNm: string;
  compNm: string;
  usrState: string;
  productImg: [];
  usrCity: string;
  scanStatus: string;
}

export class GetUserVerificationResponse {
  responseCode: string;
  responseMessage: string;
  data: GetUserVerification[];
}
