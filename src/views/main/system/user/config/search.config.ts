import { IForm } from "@/base-ui/form/types";
const formConfig: IForm = {
  formItems: [
    {
      type: "input",
      label: "用户名",
      placeholder: "请输入用户名",
    },
    {
      type: "password",
      label: "密码",
      placeholder: "请输入密码",
    },
    {
      type: "select",
      label: "喜欢的运动",
      placeholder: "请选择喜欢的运动",
      options: [
        {
          label: "足球",
          value: "football",
        },
        {
          label: "篮球",
          value: "basketball",
        },
      ],
    },
    {
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
