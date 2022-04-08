export const rules = {
  name: [
    {
      required: true,
      message: "用户名不能为空",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: "账号必须是5-10位的数字或字母",
      trigger: "blur",
    },
  ],
  phone: [
    {
      required: true,
      message: "手机号不能为空",
      trigger: "blur",
    },
    {
      pattern: /^(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/,
      message: "手机号不合规",
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true,
      message: "密码不能为空",
      trigger: "blur",
    },
    {
      pattern: /^[a-z0-9]{5,14}$/,
      message: "密码必须是5-14位的数字或字母",
      trigger: "blur",
    },
  ],
  verifyCode: [
    {
      required: true,
      message: "验证码不能为空",
      trigger: "blur",
    },
  ],
};
