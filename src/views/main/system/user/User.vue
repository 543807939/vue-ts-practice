<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    ></page-search>
    <div class="content">
      <page-content
        ref="pageContentRef"
        :pageName="pageName"
        :contentTableConfig="contentTableConfig"
      ></page-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PageSearch from "@/components/page-search";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import PageContent from "@/components/page-content";
import { userPageSearch } from "@/hooks/user-page-search";
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const pageName = "users";
    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch();
    return {
      formConfig,
      contentTableConfig,
      pageName,
      pageContentRef,
      handleResetClick,
      handleSearchClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #eee;
}
</style>
