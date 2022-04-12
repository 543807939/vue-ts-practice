<template>
  <div class="user">
    <page-search :formConfig="formConfig"></page-search>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import formConfig from './config/search.config'
export default defineComponent({
  components: {
    PageSearch,
  },
  setup() {
    return {
      formConfig,
    }
  },
})
</script>
<style lang="scss" scoped>
</style>
