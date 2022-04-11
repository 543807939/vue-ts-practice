<template>
  <el-container class="main-container">
    <el-aside :width="isCollapse ? '50px' : '210px'">
      <nav-menu :collapse="isCollapse"></nav-menu>
    </el-aside>

    <el-container class="page">
      <el-header class="page-header">
        <nav-header @toggleMenuStatus="toggleMenuStatus"></nav-header>
      </el-header>
      <el-main class="page-container">
        <div class="page-detail">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "@/components/nav-menu";
import NavHeader from "@/components/nav-header";
export default defineComponent({
  components: {
    NavMenu,
    NavHeader,
  },
  setup() {
    const isCollapse = ref(false);
    const toggleMenuStatus = (value: string) => {
      switch (value) {
        case "expand": {
          isCollapse.value = true;
          break;
        }
        case "fold": {
          isCollapse.value = false;
          break;
        }
        default: {
          break;
        }
      }
      console.log(isCollapse.value);
    };
    return {
      isCollapse,
      toggleMenuStatus,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-container {
  width: 100%;
  height: 100%;
  .el-aside {
    background-color: #535c68;
    transition: width 0.3s linear;
  }
  .page-header {
    height: 48px;
  }
  .page-container {
    min-width: 400px;
    height: calc(100% - 48px);
    .page-detail {
      border-radius: 8px;
      background-color: #fff;
    }
  }
  .el-main {
    background-color: #f0f2f5;
  }
}
</style>
