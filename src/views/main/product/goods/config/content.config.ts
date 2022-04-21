export const contentTableConfig = {
  title: "商品列表",
  showIndexColume: true,
  showSelectionColume: true,
  propList: [
    {
      prop: "name",
      label: "商品名称",
      "min-width": "130",
    },
    {
      prop: "oldPrice",
      label: "原价",
    },
    {
      prop: "newPrice",
      label: "现价",
      "min-width": "250",
    },
    {
      prop: "imgUrl",
      label: "商品图片",
      "min-width": "100",
    },
    {
      prop: "status",
      label: "商品状态",
      "min-width": "100",
    },
    {
      prop: "updateAt",
      label: "更新时间",
      "min-width": "250",
    },
    {
      label: "操作",
      prop: "handler",
      "min-width": "180",
    },
  ],
};
