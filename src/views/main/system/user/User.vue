<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
    <div class="content">
      <page-content
        :pageName="pageName"
        :contentTableConfig="contentTableConfig"
      ></page-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageSearch from "@/components/page-search";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import PageContent from "@/components/page-content";

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const pageName = "users";
    return {
      formConfig,
      contentTableConfig,
      pageName,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
