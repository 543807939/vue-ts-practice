<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <my-card title="分类商品数量(饼图)">
          <pie-chart :pieData="categoryGoodsCount"></pie-chart>
        </my-card>
      </el-col>
      <el-col :span="10">
        <my-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart
        ></my-card>
      </el-col>
      <el-col :span="7">
        <my-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </my-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="container-row">
      <el-col :span="12">
        <my-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </my-card>
      </el-col>
      <el-col :span="12">
        <my-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor"> </bar-echart>
        </my-card>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import MyCard from "@/base-ui/card";

import {
  PieChart,
  RoseEchart,
  LineEchart,
  BarEchart,
  MapEchart,
} from "@/components/page-echarts";
export default defineComponent({
  components: {
    MyCard,
    RoseEchart,
    PieChart,
    LineEchart,
    BarEchart,
    MapEchart,
  },
  setup() {
    const divRef = ref<HTMLElement>();
    const store = useStore();
    onMounted(() => {
      store.dispatch("analysisModule/getDashboardDataAction");
    });
    const categoryGoodsCount = computed(() => {
      return store.state.analysisModule.categoryGoodsCount.map((item: any) => {
        return {
          name: item.name,
          value: item.goodsCount,
        };
      });
    });

    const categoryGoodsSale = computed(() => {
      const xLabels: string[] = [];
      const value: any[] = [];
      const categoryGoodsSale = store.state.analysisModule.categoryGoodsSale;

      for (const item of categoryGoodsSale) {
        xLabels.push(item.name);
        value.push(item.goodsCount);
      }
      return { xLabels, value };
    });
    const categoryGoodsFavor = computed(() => {
      const xLabels: string[] = [];
      const value: any[] = [];
      const categoryGoodsFavor = store.state.analysisModule.categoryGoodsFavor;

      for (const item of categoryGoodsFavor) {
        xLabels.push(item.name);
        value.push(item.goodsFavor);
      }
      return { xLabels, value };
    });
    const addressGoodsSale = computed(() => {
      return store.state.analysisModule.addressGoodsSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count,
        };
      });
    });
    return {
      divRef,
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
    };
  },
});
</script>
<style lang="scss" scoped>
.container-row {
  margin-top: 10px;
}
</style>
