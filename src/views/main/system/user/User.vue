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
        @newBtnClick="handleNewData"
        @editBtnClick="handleEditData"
      ></page-content>
    </div>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
    ></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import PageSearch from "@/components/page-search";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import PageContent from "@/components/page-content";
import { userPageSearch } from "@/hooks/user-page-search";
import PageModal from "@/components/page-modal";
import { modalConfig } from "./config/modal.config";

import { usePageModal } from "@/hooks/use-page-modal";
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = "users";

    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch();
    // 新增的回调函数
    const newCallBack = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === "password";
      });
      passwordItem!.isHidden = true;
    };
    // 编辑的回调函数
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === "password";
      });
      console.log(passwordItem);

      passwordItem!.isHidden = false;
    };
    const { defaultInfo, pageModalRef, handleNewData, handleEditData } =
      usePageModal(newCallBack, editCallBack);
    return {
      formConfig,
      contentTableConfig,
      pageName,
      pageContentRef,
      modalConfig,
      pageModalRef,
      defaultInfo,
      handleResetClick,
      handleSearchClick,
      handleNewData,
      handleEditData,
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
