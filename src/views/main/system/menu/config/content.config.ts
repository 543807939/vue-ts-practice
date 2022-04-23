export const contentTableConfig = {
  title: "菜单列表",
  showPagination: false,
  showIndexColume: false,
  showSelectionColume: false,
  propList: [
    {
      prop: "name",
      label: "菜单名称",
      "min-width": "130",
    },
    {
      prop: "type",
      label: "类型",
    },
    {
      prop: "url",
      label: "菜单URL",
      "min-width": "160",
    },
    {
      prop: "icon",
      label: "图标",
    },
    {
      prop: "permission",
      label: "按钮权限",
      "min-width": "100",
    },
    {
      prop: "createAt",
      label: "创建时间",
      "min-width": "250",
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
  childrenProps: {
    "row-key": "id",
    "tree-props": {
      children: "children",
    },
  },
};
