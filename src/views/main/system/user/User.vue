<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @handleResetClick="handleResetClick"
      @handleSearchClick="handleSearchClick"
    ></page-search>
    <div class="content">
      <page-content :pageName="pageName" :contentTableConfig="contentTableConfig"></page-content>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { contentTableConfig } from './config/content.config'
import formConfig from './config/search.config'
import PageContent from '@/components/page-content'

export default defineComponent({
  components: {
    PageSearch,
    PageContent,
  },
  setup() {
    const pageName = 'user'
    const handleResetClick = () => {
      console.log('重置')
    }
    const handleSearchClick = (formData: any) => {
      console.log('查询', formData)
    }
    return {
      formConfig,
      contentTableConfig,
      pageName,
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
