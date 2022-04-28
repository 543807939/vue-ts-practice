<template>
  <div class="my-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth" ref="myForm">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col :style="colStyle" v-bind="item.colLayout || colLayout">
            <el-form-item :label="item.label" :rules="item.rules">
              <template v-if="item.type === 'input' || item.type === 'password'">
                <el-input
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="(item, index) in item.options"
                    :key="index"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </template>
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  v-model="formData[`${item.field}`]"
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <slot name="footer"></slot>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus'
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFormItem } from '../types'
export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true,
    },
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return []
      },
    },
    labelWidth: {
      type: [String, Number],
      default() {
        return 100
      },
    },
    colStyle: {
      type: Object,
      default() {
        return {
          padding: '10px 40px',
        }
      },
    },
    colLayout: {
      type: Object,
      default() {
        return {
          xs: 24,
          md: 12,
          lg: 8,
          xl: 6,
        }
      },
    },
  },
  emits: ['update:modelValue'],
  setup(props: any, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      { deep: true }
    )

    return {
      formData,
    }
  },
})
</script>
<style lang="scss" scoped>
.my-form {
  padding-top: 18px;
}
</style>
