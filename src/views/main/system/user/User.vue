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
      :pageName="pageName"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    ></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import PageSearch from "@/components/page-search";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import PageContent from "@/components/page-content";
import { userPageSearch } from "@/hooks/user-page-search";
import PageModal from "@/components/page-modal";
import { modalConfig } from "./config/modal.config";

import { usePageModal } from "@/hooks/use-page-modal";
import { useStore } from "vuex";
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
      passwordItem!.isHidden = false;
    };
    // 编辑的回调函数
    const editCallBack = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === "password";
      });
      console.log(passwordItem);

      passwordItem!.isHidden = true;
    };

    // 动态添加部门和角色的选项
    const store = useStore();
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === "departmentId";
      });
      departmentItem!.options = store.state.entireDepartment.map(
        (item: any) => {
          return {
            label: item.name,
            value: item.id,
          };
        }
      );
      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === "roleId";
      });

      roleItem!.options = store.state.entireRole.map((item: any) => {
        return {
          label: item.name,
          value: item.id,
        };
      });
      return modalConfig;
    });

    const { defaultInfo, pageModalRef, handleNewData, handleEditData } =
      usePageModal(newCallBack, editCallBack);
    return {
      formConfig,
      contentTableConfig,
      pageName,
      pageContentRef,
      modalConfigRef,
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
