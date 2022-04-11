<template>
  <div class="my-form">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="(item, index) in formItems" :key="index">
          <el-col
            :style="colStyle"
            :xs="{ span: 24 }"
            :md="{ span: 12 }"
            :lg="{ span: 8 }"
            :xl="{ span: 6 }"
          >
            <el-form-item :label="item.label" :rules="item.rules">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  :show-password="item.type === 'password'"
                ></el-input>
              </template>
              <template v-else-if="item.type === 'select'">
                <el-select
                  style="width: 100%"
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
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
                  style="width: 100%"
                  v-bind="item.otherOptions"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import { IFormItem } from "../types";
export default defineComponent({
  props: {
    formItems: {
      type: Array as PropType<IFormItem[]>,
      default: () => {
        return [];
      },
    },
    labelWidth: {
      type: [String, Number],
      default() {
        return 100;
      },
    },
    colStyle: {
      type: Object,
      default() {
        return {
          padding: "10px 40px",
        };
      },
    },
  },
  setup() {
    return {};
  },
});
</script>
<style lang="scss" scoped>
.my-form {
  padding-top: 18px;
}
</style>
