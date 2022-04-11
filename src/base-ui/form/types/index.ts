type IFormItemType = "input" | "select" | "password" | "datepicker";

export interface IFormItem {
  type: IFormItemType;
  label: string;
  rules?: Array<any>;
  placeholder?: string;
  options?: any[];
}
