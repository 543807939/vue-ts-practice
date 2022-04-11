<template>
  <div class="user">
    <my-form :formItems="formItems"></my-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MyForm, { IFormItem } from '@/base-ui/form'
export default defineComponent({
  components: {
    MyForm,
  },
  setup() {
    const formItems: IFormItem[] = [
      {
        type: 'input',
        label: '用户名',
        placeholder: '请输入用户名',
      },
      {
        type: 'password',
        label: '密码',
        placeholder: '请输入密码',
      },
      {
        type: 'select',
        label: '喜欢的运动',
        placeholder: '请选择喜欢的运动',
        options: [
          {
            label: '足球',
            value: 'football',
          },
          {
            label: '篮球',
            value: 'basketball',
          },
        ],
      },
      {
        type: 'datepicker',
        label: '创建时间',
        placeholder: '请选择创建时间',
      },
    ]
    return {
      formItems,
    }
  },
})
</script>
<style lang="scss" scoped></style>
