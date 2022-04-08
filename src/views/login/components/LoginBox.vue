<template>
  <div class="login-box">
    <h1 class="title">后台管理系统</h1>
    <el-tabs v-model="checkedTab" type="border-card" stretch class="demo-tabs">
      <el-tab-pane name="account">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <avatar />
            </el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account ref="loginAccountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        <login-phone ref="loginPhoneRef"></login-phone>
      </el-tab-pane>
    </el-tabs>
    <div class="control-tab">
      <el-checkbox v-model="rememberPassword">
        <span style="color: #409eff">记住密码</span>
      </el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login" type="primary" @click="handleClick"
      >立即登录</el-button
    >
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { Avatar, Iphone } from "@element-plus/icons-vue";
import LoginAccount from "./LoginAccount.vue";
import LoginPhone from "./LoginPhone.vue";

export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
    LoginPhone,
  },
  setup() {
    const checkedTab = ref("account");
    const rememberPassword = ref(false);
    const loginPhoneRef = ref<InstanceType<typeof LoginPhone>>();
    const loginAccountRef = ref<InstanceType<typeof LoginAccount>>();
    const handleClick = () => {
      if (checkedTab.value === "account") {
        loginAccountRef.value?.loginAction(rememberPassword.value);
      } else if (checkedTab.value === "phone") {
        loginPhoneRef.value?.loginAction()
      }
    };
    return {
      rememberPassword,
      loginAccountRef,
      loginPhoneRef,
      checkedTab,
      handleClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.login-box {
  width: 320px;
  .login {
    width: 100%;
    margin-top: 10px;
  }
}
.control-tab {
  display: flex;
  justify-content: space-between;
}
.custom-tabs-label {
  & > span {
    margin-left: 5px;
    vertical-align: middle;
  }
}
.demo-tabs .custom-tabs-label .el-icon {
  vertical-align: middle;
}
</style>
