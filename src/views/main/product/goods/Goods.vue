<template>
  <div>
    <page-search :formConfig="formConfig"></page-search>
    <PageConent
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
    ></PageConent>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PageSearch from "@/components/page-search";
import PageConent from "@/components/page-content";
import {contentTableConfig} from "./config/content.config";
import formConfig from "./config/search.config";
export default defineComponent({
  components: {
    PageSearch,
    PageConent,
  },
  setup() {
    const pageName = ref("goods");
    return {
      pageName,
      contentTableConfig,
      formConfig,
    };
  },
});
</script>
<style lang="scss" scoped></style>
