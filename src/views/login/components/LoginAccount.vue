<template>
  <div class="login-account">
    <el-form label-position="right" label-width="60px" :model="formData" style="max-width: 460px">
      <el-form-item label="账号">
        <el-input v-model="formData.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formData.password" />
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const formData = ref({
      account: '',
      password: '',
    })
    return {
      formData,
    }
  },
})
</script>
<style lang="scss" scoped>
.login-account {
}
</style>
