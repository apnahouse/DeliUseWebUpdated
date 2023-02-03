export class RoleForDropDown {
  roleId: number;
  roleName: string;
}

export class RoleResponse {
  responseCode: string;
  responseMessage: string;
  data: RoleForDropDown[];
}

export class Role {
  id: number;
  roleName: string;
  description: string;
  isActive: boolean;
}

export class RolePage {
  roleId: number;
  pageId: number;
  pageName: string;
  viewRight: boolean;
  editRight: boolean;
  deleteRight: boolean;
  addRight: boolean;
  controlerNm: string;
  actionNm: string;
  parentId: number;
  serialNo: number;
  isReport: boolean;
  roleIdM: number;
  pageIdM: number;
  pageNameM: string;
  viewRightM: boolean;
  editRightM: boolean;
  deleteRightM: boolean;
  addRightM: boolean;
  controlerNmM: string;
  actionNmM: string;
  parentIdM: number;
  serialNoM: number;
  isReportM: boolean;
}

export class RoleManage {
  pages: RolePage[];
  pagesM: RolePage[];
  updatedBy: any;
  roleId: number;
}

export class RolePageResponse {
  responseCode: string;
  responseMessage: string;
  details: [];
}
