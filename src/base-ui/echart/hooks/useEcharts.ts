import * as echarts from "echarts";
import ChinaMapData from "../data/china.json";
echarts.registerMap("china", ChinaMapData);
export default function (el: HTMLElement) {
  const echartsInstance = echarts.init(el);
  const setOptions = (option: echarts.EChartsCoreOption) => {
    echartsInstance.setOption(option);
  };
  window.addEventListener("resize", () => {
    echartsInstance.resize();
  });
  return {
    echartsInstance,
    setOptions,
  };
}
