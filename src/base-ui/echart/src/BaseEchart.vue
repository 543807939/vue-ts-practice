<template>
  <div class="base-chart">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, defineProps, withDefaults, watchEffect } from "vue";
import { EChartsCoreOption } from "echarts";
import useEcharts from "../hooks/useEcharts";
const props = withDefaults(
  defineProps<{
    width?: string;
    height?: string;
    options: EChartsCoreOption;
  }>(),
  {
    width: "100%",
    height: "360px",
  }
);
const w = 600;
const h = 600;
const echartDivRef = ref<HTMLElement>();
onMounted(() => {
  const { setOptions } = useEcharts(echartDivRef.value!);
  watchEffect(() => {
    setOptions(props.options);
  });
});
</script>
<style lang="scss" scoped>
</style>
