<template>
  <my-table
    v-bind="contentTableConfig"
    v-model:page="pageInfo"
    :dataCount="totalNum"
    :userList="userList"
  >
    <!-- header插槽 -->
    <template #headerHandler>
      <el-button type="primary">
        <el-icon> <document-add /> </el-icon>新建用户
      </el-button>
    </template>
    <!-- table插槽 -->
    <template #enable="scope">
      <el-button
        plain
        size="small"
        :type="scope.row.enable == 0 ? 'warning' : 'primary'"
        >{{ scope.row.enable == 0 ? "禁用" : "启用" }}</el-button
      >
    </template>
    <template #createAt="scope">{{
      $filters.formatDate(scope.row.createAt)
    }}</template>
    <template #updateAt="scope">{{
      $filters.formatDate(scope.row.updateAt)
    }}</template>
    <template #handler="scope">
      <el-button
        plain
        size="small"
        type="primary"
        @click="handleEdit(scope.row)"
      >
        <el-icon> <Edit /> </el-icon>编辑
      </el-button>
      <el-button
        plain
        size="small"
        type="danger"
        @click="handleDelete(scope.row)"
      >
        <el-icon> <Delete /> </el-icon>删除
      </el-button>
    </template>
  </my-table>
</template>

<script lang="ts"  >
import MyTable from "@/base-ui/table";
import { defineComponent, computed, ref, watch } from "vue";
import { Edit, Delete, DocumentAdd } from "@element-plus/icons-vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    MyTable,
    Edit,
    Delete,
    DocumentAdd,
  },
  props: {
    contentTableConfig: {
      type: Object,
      required: true,
    },

    pageName: {
      type: String,
      required: true,
    },
  },
  setup(props: any) {
    const store = useStore();
    const pageInfo = ref({
      pageSize: 10,
      currentPage: 1,
    });
    const getPageData = (queryInfo?: any) => {
      const query: any = {};
      for (const key in queryInfo) {
        if (
          queryInfo[key] !== null &&
          queryInfo[key] !== undefined &&
          queryInfo[key] !== ""
        ) {
          query[key] = queryInfo[key];
        }
      }
      store.dispatch("systemModule/getPageList", {
        // url: "/users/list",
        pageName: props.pageName,
        queryInfo: {
          offset: pageInfo.value.pageSize * (pageInfo.value.currentPage - 1),
          size: pageInfo.value.pageSize,
          ...query,
        },
      });
    };
    watch(
      () => pageInfo.value,
      () => {
        getPageData();
      },
      { deep: true }
    );
    getPageData();
    const userList = computed(
      () => store.state.systemModule[`${props.pageName}List`]
    );
    const totalNum = computed(
      () => store.state.systemModule[`${props.pageName}Count`]
    );

    return {
      getPageData,
      userList,
      totalNum,
      pageInfo,
    };
  },
});
</script>

<style lang="scss" scoped>
.el-icon {
  margin-right: 3px;
}
</style>
