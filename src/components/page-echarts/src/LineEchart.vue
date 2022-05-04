<template>
  <div class="line-echart">
    <base-echart :options="lineOptions"></base-echart>
  </div>
</template>
<script lang="ts" setup>
import BaseEchart from "@/base-ui/echart";
import { computed, defineProps } from "vue";
const props = defineProps<{
  xLabels: string[];
  value: any[];
}>();
const lineOptions = computed(() => {
  return {
    title: {
      text: "Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },

    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: props.xLabels,
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: {
      name: "Email",
      type: "line",
      stack: "Total",
      areaStyle: {},
      emphasis: {
        focus: "series",
      },
      data: props.value,
    },
  };
});
</script>
