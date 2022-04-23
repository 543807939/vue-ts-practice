import { IForm } from "@/base-ui/form/types";
const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "角色名",
      placeholder: "请输入角色名",
    },
    {
      field: "intro",
      type: "input",
      label: "请输入权限介绍",
    },
    {
      field: "createDate",
      type: "datepicker",
      label: "创建时间",
      placeholder: "请选择创建时间",
      otherOptions: {
        startPlaceholder: "起始日期",
        endPlaceholder: "结束日期",
        type: "daterange",
      },
    },
  ],
  labelWidth: 130,
  colStyle: {
    padding: "10px 20px",
  },
};
export default formConfig;
