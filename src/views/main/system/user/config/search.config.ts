import { IForm } from "@/base-ui/form/types";
const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      field: "realname",
      type: "input",
      label: "真实姓名",
      placeholder: "请输入真实姓名",
    },
    {
      field: "cellphone",
      type: "input",
      label: "电话号码",
      placeholder: "请输入电话号码",
    },
    {
      field: "enable",
      type: "select",
      label: "用户状态",
      placeholder: "请选择用户状态",
      options: [
        {
          label: "启用",
          value: "1",
        },
        {
          label: "禁用",
          value: "0",
        },
      ],
    },
    {
      field: "createAt",
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
