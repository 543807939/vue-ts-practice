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
      :modalConfig="modalConfig"
      :defaultInfo="defaultInfo"
      :pageName="pageName"
      :otherInfo="otherInfo"
    >
      <el-tree
        ref="elTreeRef"
        :props="{ children: 'children', label: 'name' }"
        :data="menus"
        node-key="id"
        show-checkbox
        @check="handleCheckChange"
      />
    </page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, nextTick } from "vue";
import PageSearch from "@/components/page-search";
import { contentTableConfig } from "./config/content.config";
import formConfig from "./config/search.config";
import PageContent from "@/components/page-content";
import { userPageSearch } from "@/hooks/user-page-search";
import PageModal from "@/components/page-modal";
import { modalConfig } from "./config/modal.config";
import { usePageModal } from "@/hooks/use-page-modal";
import { useStore } from "vuex";
import { getMenuLeftKeys } from "@/utils/map-menus";
import { ElTree } from "element-plus";
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = "role";
    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch();
    // 处理pageModal的callback
    const elTreeRef = ref<InstanceType<typeof ElTree>>();
    const editCallback = (item: any) => {
      console.log(item);
      const leftKeys = getMenuLeftKeys(item.menuList);
      console.log(leftKeys);
      nextTick(() => {
        elTreeRef?.value?.setCheckedKeys(leftKeys, false);
      });
    };
    const { defaultInfo, pageModalRef, handleNewData, handleEditData } =
      usePageModal(undefined, editCallback);

    const otherInfo = ref({});
    const store = useStore();
    const menus = computed(() => store.state.entireMenu);
    console.log(menus);

    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys;
      const halfCheckedKeys = data2.halfCheckedKeys;
      const menuList = [...checkedKeys, ...halfCheckedKeys];
      otherInfo.value = { menuList };
    };
    return {
      formConfig,
      contentTableConfig,
      pageName,
      modalConfig,
      elTreeRef,
      handleResetClick,
      pageContentRef,
      handleSearchClick,
      defaultInfo,
      pageModalRef,
      handleNewData,
      handleEditData,
      menus,
      otherInfo,
      handleCheckChange,
    };
  },
});
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #eee;
}
.el-tree {
  margin-left: 40px;
}
</style>
