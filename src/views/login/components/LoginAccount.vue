<template>
  <div class="login-account">
    <el-form
      label-position="right"
      label-width="70px"
      ref="formRef"
      :model="formData"
      :rules="rules"
      style="max-width: 460px"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formData.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from "element-plus/lib/components";
import { defineComponent, ref } from "vue";
import { rules } from "../config/account-config";
export default defineComponent({
  setup() {
    const formData = ref({
      account: "",
      password: "",
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const loginAction = async () => {
      try {
        await formRef.value?.validate();
        console.log("验证通过");
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
.login-account {
}
</style>
