<template>
  <el-dropdown>
    <el-avatar size="small" :src="circleUrl" />
    <span>{{ name }}</span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleExitClick">
          <el-icon class="el-icon--right"> <switch-button /> </el-icon>退出登录
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon class="el-icon--right"> <user-filled /> </el-icon>用户信息
        </el-dropdown-item>

        <el-dropdown-item divided>
          <el-icon class="el-icon--right"> <setting /> </el-icon>我的设置
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import { SwitchButton, Setting, UserFilled } from "@element-plus/icons-vue";
import { useStore } from "vuex";
import localCache from "@/utils/cache";
import { useRouter } from "vue-router";
export default defineComponent({
  components: { SwitchButton, Setting, UserFilled },
  setup() {
    const store = useStore();
    const name = computed(() => store.state.loginModule.userInfo.name);
    const circleUrl = ref(
      "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    );
    const router = useRouter();
    const handleExitClick = () => {
      localCache.removeCache("token");
      router.push("/main");
    };
    return {
      circleUrl,
      name,
      handleExitClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-dropdown {
  cursor: pointer;
}
.el-avatar {
  margin-right: 5px;
  vertical-align: middle;
}
</style>
