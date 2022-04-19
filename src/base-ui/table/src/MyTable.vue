<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <slot name="headerHandler"></slot>
      </slot>
    </div>
    <el-table :data="userList" @selection-change="handleSelectionChange" border stripe>
      <el-table-column type="selection" v-if="showSelectionColume"></el-table-column>
      <el-table-column
        type="index"
        v-if="showIndexColume"
        align="center"
        label="序号"
        min-width="200"
      ></el-table-column>
      <template v-for="item in propList" :key="item.cellphone">
        <el-table-column v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">{{ scope.row[item.prop] }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { ElForm } from 'element-plus/lib/components'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    showSelectionColume: {
      type: Boolean,
      default() {
        return false
      },
    },
    showIndexColume: {
      type: Boolean,
      default() {
        return false
      },
    },
    userList: {
      type: Array,
      default() {
        return []
      },
    },
    propList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  emits: ['handleSelectionChange'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any) => {
      // emit("handleSelectionChange", value);
      console.log(value)
    }

    return {
      handleSelectionChange,
    }
  },
})
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  .title {
    font-size: 20px;
    font-weight: 600;
  }
}
</style>
