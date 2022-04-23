<template>
  <div>
    <page-search
      :formConfig="formConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    ></page-search>
    <PageConent
      ref="pageContentRef"
      :pageName="pageName"
      :contentTableConfig="contentTableConfig"
    >
      <template #imgUrl="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          fit="fill"
          preview-teleported
          :preview-src-list="[scope.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scope"> ￥{{ scope.row.oldPrice }} </template>
      <template #newPrice="scope"> ￥{{ scope.row.newPrice }} </template>
    </PageConent>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import PageSearch from "@/components/page-search";
import PageConent from "@/components/page-content";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import { userPageSearch } from "@/hooks/user-page-search";
export default defineComponent({
  components: {
    PageSearch,
    PageConent,
  },
  setup() {
    const pageName = ref("goods");
    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch();
    return {
      pageName,
      contentTableConfig,
      formConfig,
      handleResetClick,
      pageContentRef,
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
