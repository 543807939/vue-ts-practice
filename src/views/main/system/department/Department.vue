<template>
  <div>
    <el-form :model="form" ref="formRef">
      <el-form-item label="1" prop="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="2" prop="age">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="3" prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-button @click="reset">重置</el-button>
    </el-form>
  </div>
</template>
<script lang="ts">
import type { FormInstance, FormRules } from 'element-plus'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {
    const form = ref({
      name: '',
      age: '',
      nickname: '',
    })
    const formRef = ref<FormInstance>()
    const reset = () => {
      console.log('重置')
      formRef.value?.resetFields()
    }
    return { form, reset, formRef }
  },
})
</script>
<style lang="scss" scoped></style>
