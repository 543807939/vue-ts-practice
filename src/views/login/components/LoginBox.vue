<template>
  <div class="login-box">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <avatar />
            </el-icon>
            <span>账号登陆</span>
          </span>
        </template>
        <login-account></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <el-icon>
              <iphone />
            </el-icon>
            <span>手机登录</span>
          </span>
        </template>
        Route
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar, Iphone } from '@element-plus/icons-vue'
import LoginAccount from './LoginAccount.vue'
export default defineComponent({
  components: {
    Avatar,
    Iphone,
    LoginAccount,
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.login-box {
  width: 320px;
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
