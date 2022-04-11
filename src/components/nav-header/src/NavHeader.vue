<template>
  <div class="nav-header">
    <el-icon :size="30" style="vertical-align: middle; cursor: pointer" @click="toggleMenu">
      <component :is="icon"></component>
    </el-icon>
    <div class="content">
      <span>面包屑</span>

      <section class="right-content">
        <el-badge>
          <el-button circle :icon="Message"></el-button>
        </el-badge>
        <el-badge>
          <el-button circle :icon="ChatDotRound"></el-button>
        </el-badge>
        <el-badge is-dot>
          <el-button circle :icon="Bell"></el-button>
        </el-badge>
        <user-info></user-info>
      </section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import {
  Expand,
  Fold,
  Message,
  ChatDotRound,
  Bell,
} from '@element-plus/icons-vue'
import UserInfo from './UserInfo.vue'
export default defineComponent({
  components: {
    UserInfo,
    Expand,
    Fold,
  },
  emits: ['toggleMenuStatus'],
  setup(props, { emit }) {
    const icon = ref('fold')
    const toggleMenu = () => {
      switch (icon.value) {
        case 'expand': {
          icon.value = 'fold'
          break
        }
        case 'fold': {
          icon.value = 'expand'
          break
        }
        default: {
          break
        }
      }
    }
    watch(icon, (newValue) => {
      emit('toggleMenuStatus', newValue)
    })
    return {
      icon,
      toggleMenu,
      Message,
      ChatDotRound,
      Bell,
    }
  },
})
</script>
<style lang="scss" scoped>
::v-deep .el-button {
  width: 26px !important;
  height: 26px !important;
  vertical-align: middle;
}
.el-badge {
  margin-right: 15px;
}
.nav-header {
  display: flex;
  align-items: center;

  height: 100%;

  .content {
    flex: 1;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-left: 20px;
    .right-content {
      display: flex;
      align-items: center;
    }
  }
}
</style>
