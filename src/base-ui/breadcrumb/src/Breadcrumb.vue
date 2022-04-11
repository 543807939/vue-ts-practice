<template>
  <div class="nav-breadcrumb">
    <el-breadcrumb separator="/">
      <template v-for="item in breadcrumb" :key="item.name">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IBreadcrumb } from "@/base-ui/breadcrumb/types";
export default defineComponent({
  props: {
    breadcrumb: {
      type: Array as PropType<IBreadcrumb[]>,
      default: () => {
        return [];
      },
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.nav-breadcrumb {
}
</style>
