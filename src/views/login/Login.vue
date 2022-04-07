<template>
  <div class="login">
    <login-box></login-box>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import LoginBox from './components/LoginBox.vue'
export default defineComponent({
  components: {
    LoginBox,
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  background: url('~@/assets/image/login-bg.svg');
}
</style>
