import { IForm } from "@/base-ui/form/types";
const formConfig: IForm = {
  formItems: [
    {
      field: "name",
      type: "input",
      label: "商品名称",
      placeholder: "请输入商品名称",
    },
    {
      field: "status",
      type: "select",
      label: " 商品状态",
      placeholder: "请选择商品状态",

      options: [
        {
          label: "启用",
          value: 1,
        },
        {
          label: "禁用",
          value: 0,
        },
      ],
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
