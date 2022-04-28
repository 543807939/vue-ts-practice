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
    <el-dialog title="新建用户" v-model="dialogVisible" width="40%" center>
      <my-form v-bind="modalConfig"></my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import formConfig from './config/search.config'
import PageContent from '@/components/page-content'
import { userPageSearch } from '@/hooks/user-page-search'
import MyForm from '@/base-ui/form/index'
import { modalConfig } from './config/modal.config'
export default defineComponent({
  components: {
    PageSearch,
    PageContent,
    MyForm,
  },
  setup() {
    const dialogVisible = ref(true)
    const pageName = 'users'
    const { handleResetClick, pageContentRef, handleSearchClick } =
      userPageSearch()
    return {
      formConfig,
      contentTableConfig,
      pageName,
      pageContentRef,
      dialogVisible,
      modalConfig,
      handleResetClick,
      handleSearchClick,
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
