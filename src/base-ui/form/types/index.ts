type IFormItemType = "input" | "select" | "password" | "datepicker";

export interface IFormItem {
  type: IFormItemType;
  label: string;
  rules?: Array<any>;
  placeholder?: string;
  // select 的选项
  options?: any[];
  // datepicker选项
  otherOptions?: any;
}

export interface IForm {
  formItems: IFormItem[];
  labelWidth?: string | number;
  colStyle?: any;
}
