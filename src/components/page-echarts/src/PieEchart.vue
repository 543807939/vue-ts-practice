<template>
  <div class="pie-echart">
    <base-echart :options="pieOptions"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import BaseEchart from "@/base-ui/echart";
import { defineProps, computed } from "vue";
import { IDataType } from "../types";
const props = defineProps<{
  pieData: IDataType[];
}>();
const pieOptions = computed(() => {
  return {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "分类数据",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: "40",
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: props.pieData,
      },
    ],
  };
});
</script>
<style lang="scss" scoped>
</style>