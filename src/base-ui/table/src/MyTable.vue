<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">{{ title }}</div>
        <slot name="headerHandler"></slot>
      </slot>
    </div>
    <el-table
      :data="userList"
      v-bind="childrenProps"
      @selection-change="handleSelectionChange"
      border
      stripe
    >
      <el-table-column
        type="selection"
        v-if="showSelectionColume"
      ></el-table-column>
      <el-table-column
        type="index"
        v-if="showIndexColume"
        align="center"
        label="序号"
        min-width="200"
      ></el-table-column>
      <template v-for="item in propList" :key="item.cellphone">
        <el-table-column show-overflow-tooltip v-bind="item" align="center">
          <template #default="scope">
            <slot :name="item.prop" :row="scope.row">{{
              scope.row[item.prop]
            }}</slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <el-pagination
        v-if="showPagination"
        :currentPage="page.currentPage"
        :page-size="page.pageSize"
        :page-sizes="[10, 20, 30, 40]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="dataCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { ElForm } from "element-plus/lib/components";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    title: {
      type: String,
    },
    showSelectionColume: {
      type: Boolean,
      default() {
        return false;
      },
    },
    showIndexColume: {
      type: Boolean,
      default() {
        return false;
      },
    },
    userList: {
      type: Array,
      default() {
        return [];
      },
    },
    propList: {
      type: Array,
      default() {
        return [];
      },
    },
    dataCount: {
      type: [Number, String],
      default() {
        return 0;
      },
    },
    childrenProps: {
      type: Object,
    },
    showPagination: {
      type: Boolean,
      default() {
        return true;
      },
    },
    page: {
      type: Object,
      default() {
        return {
          pageSize: 10,
          currentPage: 1,
        };
      },
    },
  },
  emits: ["handleSelectionChange", "update:page"],
  setup(props: any, { emit }) {
    const handleSelectionChange = (value: any) => {
      // emit("handleSelectionChange", value);
      console.log(value);
    };
    const handleSizeChange = (pageSize: number) => {
      console.log(pageSize);
      emit("update:page", {
        ...props.page,
        pageSize,
      });
    };
    const handleCurrentChange = (currentPage: number) => {
      console.log(currentPage);
      emit("update:page", {
        ...props.page,
        currentPage,
      });
    };
    return {
      handleSelectionChange,
      handleSizeChange,
      handleCurrentChange,
    };
  },
});
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
.footer {
  display: flex;
  justify-content: flex-end;
  padding: 20px;
}
</style>
