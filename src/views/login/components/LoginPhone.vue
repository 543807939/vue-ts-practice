<template>
  <div class="login-account">
    <el-form
      ref="formRef"
      label-position="right"
      label-width="70px"
      :model="formData"
      :rules="rules"
      style="max-width: 460px"
    >
      <el-form-item label="手机" prop="phone">
        <el-input v-model="formData.phone" />
      </el-form-item>
      <el-form-item label="验证码" prop="verifyCode">
        <div class="verify-code">
          <el-input type="password" v-model="formData.verifyCode" />
          <el-button type="primary">获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from "element-plus";
import { defineComponent, ref } from "vue";
import { rules } from "../config/account-config";

export default defineComponent({
  setup() {
    const formData = ref({
      phone: "",
      verifyCode: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = async () => {
      try {
        await formRef.value?.validate();
        console.log("开始手机登录");
      } catch (error) {
        console.log(error);
      }
    };
    return {
      formData,
      rules,
      formRef,
      loginAction,
    };
  },
});
</script>
<style lang="scss" scoped>
.verify-code {
  display: flex;
  .el-button {
    margin-left: 10px;
  }
}
</style>
