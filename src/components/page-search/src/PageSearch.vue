<template>
  <my-form v-bind="formConfig" v-model="formData">
    <template #header>
      <h2 class="header">检索</h2>
    </template>
    <template #footer>
      <div class="footer">
        <el-button type="primary" :icon="Search" @click="handleSearch">搜索</el-button>
        <el-button :icon="Refresh" @click="handleReset">重置</el-button>
      </div>
    </template>
  </my-form>
</template>
<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import MyForm from '@/base-ui/form'
import { Refresh, Search } from '@element-plus/icons-vue'
import { IForm } from '@/base-ui/form/types'
export default defineComponent({
  props: {
    formConfig: {
      type: Object as PropType<IForm>,
      required: true,
    },
  },
  emits: ['handleSearchClick', 'handleResetClick'],
  setup(props, { emit }) {
    // const formItems = props.formConfig.formItems
    const formDataOrigin: any = {}
    props.formConfig.formItems.forEach((item) => {
      formDataOrigin[item.field] = ''
    })

    let formData = ref(formDataOrigin)

    watch(
      formData,
      (newValue) => {
        console.log(newValue)
      },
      {
        deep: true,
      }
    )

    const handleReset = () => {
      for (const key in formDataOrigin) {
        formData.value[key] = formDataOrigin[key]
      }
      emit('handleResetClick')
    }
    const handleSearch = () => {
      console.log('点击搜索')
      emit('handleSearchClick', formData.value)
    }
    return { formData, Refresh, Search, handleSearch, handleReset }
  },
  components: {
    MyForm,
  },
})
</script>
<style lang="scss" scoped>
.header {
  text-align: center;
}
.footer {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  .el-button:first-child {
    margin-right: 30px;
  }
}
</style>
