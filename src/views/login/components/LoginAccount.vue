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
        <el-input show-password v-model="formData.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { ElForm } from "element-plus/lib/components";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { rules } from "../config/account-config";
import localCache from "@/utils/cache";
export default defineComponent({
  setup() {
    const formData = ref({
      account: localCache.getCache("account"),
      password: localCache.getCache("password"),
    });
    const formRef = ref<InstanceType<typeof ElForm>>();
    const store = useStore();
    const loginAction = async (isRemember: boolean) => {
      try {
        await formRef.value?.validate();
        store.dispatch("loginModule/loginAccountAction", formData.value);
        if (isRemember) {
          localCache.setCache("account", formData.value.account);
          localCache.setCache("password", formData.value.password);
        } else {
          localCache.removeCache("account");
          localCache.removeCache("password");
        }
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
