<template>
  <my-table v-bind="contentTableConfig" :userList="userList">
    <!-- header插槽 -->
    <template #headerHandler>
      <el-button type="primary">
        <el-icon>
          <document-add />
        </el-icon>新建用户
      </el-button>
    </template>
    <!-- table插槽 -->
    <template #enable="scope">
      <el-button
        plain
        size="small"
        :type="scope.row.enable == 1 ? 'warning' : 'primary'"
      >{{ scope.row.enable == 1 ? "禁用" : "启用" }}</el-button>
    </template>
    <template #createAt="scope">{{ $filters.formatDate(scope.row.createAt) }}</template>
    <template #updateAt="scope">{{ $filters.formatDate(scope.row.updateAt) }}</template>
    <template #handler="scope">
      <el-button plain size="small" type="primary" @click="handleEdit(scope.row)">
        <el-icon>
          <Edit />
        </el-icon>编辑
      </el-button>
      <el-button plain size="small" type="danger" @click="handleDelete(scope.row)">
        <el-icon>
          <Delete />
        </el-icon>删除
      </el-button>
    </template>
    <!-- footer插槽 -->
    <template #footer>
      <!-- <el-pagination
            v-model:currentPage="currentPage4"
            v-model:page-size="pageSize4"
            :page-sizes="[100, 200, 300, 400]"
            :small="small"
            :disabled="disabled"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
      />-->
    </template>
  </my-table>
</template>

<script lang="ts" setup>
import MyTable from '@/base-ui/table'
import { defineProps, computed } from 'vue'
import { Edit, Delete, DocumentAdd } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
const props = defineProps({
  contentTableConfig: {
    type: Object,
    required: true,
  },
  pageName: {
    type: String,
    required: true,
  },
})
const store = useStore()
store.dispatch('systemModule/getPageList', {
  // url: "/users/list",
  pageName: props.pageName,
  queryInfo: {
    offset: 0,
    size: 10,
  },
})
const userList = computed(
  () => store.state.systemModule[`${props.pageName}List`]
)
const totalNum = computed(() => store.state.style[`${props.pageName}Count`])
</script>

<style lang="scss" scoped>
.el-icon {
  margin-right: 3px;
}
</style>
