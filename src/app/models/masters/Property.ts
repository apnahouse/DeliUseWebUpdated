export class PropertyMaster {
  id: number;
  name: string;
  description: string;
  image: string;
  totalRows: number;
}

export class PropertyRequest {
  pageNo: number;
  searchValue: string;
  pageSize: number;
  first: number;
  sortColumn: string;
  sortOrder: string;
}

export class ProertyResponse {
  responseCode: string;
  responseMessage: string;
  details: PropertyMaster[];
  totalRows: number;
}
