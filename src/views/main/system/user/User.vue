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
    <page-modal ref="pageModalRef" :defaultInfo="defaultInfo" :modalConfig="modalConfig"></page-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import formConfig from './config/search.config'
import { modalConfig } from './config/modal.config'
import PageContent from '@/components/page-content'
import { userPageSearch } from '@/hooks/user-page-search'
import PageModal from '@/components/page-modal'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    PageModal,
  },
  setup() {
    const pageName = 'users'
    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch()

    const defaultInfo = ref({})

    const pageModalRef = ref<InstanceType<typeof PageModal>>()
    // 新增数据
    const handleNewData = () => {
      console.log('新增,user组件')
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
    // 编辑数据
    const handleEditData = (item: any) => {
      console.log(item, 'user组件')
      defaultInfo.value = { ...item }
      if (pageModalRef.value) {
        pageModalRef.value.dialogVisible = true
      }
    }
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
    }
  },
})
</script>
<style lang="scss" scoped>
.content {
  padding: 20px;
  border-top: 20px solid #eee;
}
</style>
