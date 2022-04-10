<template>
  <div class="nav-header">
    <el-icon
      :size="30"
      style="vertical-align: middle; cursor: pointer"
      @click="toggleMenu"
    >
      <component :is="icon"></component>
    </el-icon>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
export default defineComponent({
  components: {
    Expand,
    Fold,
  },
  emits: ["toggleMenuStatus"],
  setup(props, { emit }) {
    const icon = ref("fold");
    const toggleMenu = () => {
      switch (icon.value) {
        case "expand": {
          icon.value = "fold";
          break;
        }
        case "fold": {
          icon.value = "expand";
          break;
        }
        default: {
          break;
        }
      }
    };
    watch(icon, (newValue) => {
      emit("toggleMenuStatus", newValue);
    });
    return {
      icon,
      toggleMenu,
    };
  },
});
</script>
<style lang="scss" scoped>
.nav-header {
  height: 100%;
  line-height: 48px;
}
</style>
