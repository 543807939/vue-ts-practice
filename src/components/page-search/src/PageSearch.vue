<template>
  <my-form v-bind="formConfig" v-model="formData">
    <template #header>
      <h2>检索</h2>
    </template>
    <template #footer>
      <div class="footer">
        <el-button type="primary" :icon="Search">搜索</el-button>
        <el-button :icon="Refresh">重置</el-button>
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
  setup() {
    const formData = ref({
      username: '',
      password: '',
      sport: '',
      createDate: '',
    })
    watch(
      formData,
      (newValue) => {
        console.log(newValue)
      },
      {
        deep: true,
      }
    )
    return { formData, Refresh, Search }
  },
  components: {
    MyForm,
  },
})
</script>
<style lang="scss" scoped>
.footer {
  display: flex;
  justify-content: center;
  padding-bottom: 30px;
  .el-button:first-child {
    margin-right: 30px;
  }
}
</style>
