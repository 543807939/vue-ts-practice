<template>
  <div class="Rose-echart">
    <base-echart :options="roseOptions"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import BaseEchart from "@/base-ui/echart";
import { defineProps, computed } from "vue";
import { IDataType } from "../types";

const props = defineProps<{
  roseData: IDataType[];
}>();
const roseOptions = computed(() => {
  return {
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true },
      },
    },
    series: [
      {
        name: "商品分类",
        type: "pie",
        radius: [30, 150],
        center: ["50%", "50%"],
        roseType: "area",
        itemStyle: {
          borderRadius: 8,
        },
        data: props.roseData,
      },
    ],
  };
});
</script>
<style lang="scss" scoped>
</style>