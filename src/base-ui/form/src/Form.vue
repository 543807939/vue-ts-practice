<template>
  <div class="my-form">
    <el-form label-width="100px">
      <el-row>
        <template v-for="item,index in formItems" :key="index">
          <el-col :span="8">
            <el-form-item :label="item.label" :placeholder="item.placeholder">
              <template v-if="item.type ==='input' || item.type ==='password'">
                <el-input :placeholder="item.placeholder" :show-password="item.type === 'password'"></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select :placeholder="item.placeholder">
                  <el-option
                    v-for="item,index in item.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker :placeholder="item.placeholder"></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return []
      },
    },
  },
  setup() {
    return {}
  },
})
</script>
<style lang="scss" scoped>
</style>
