<template>
  <div class="page-modal">
    <el-dialog
      title="新建用户"
      v-model="dialogVisible"
      width="40%"
      center
      destroy-on-close
    >
      <my-form v-bind="modalConfig" v-model="formData"></my-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="dialogVisible = false"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import MyForm from "@/base-ui/form";
export default defineComponent({
  components: {
    MyForm,
  },
  props: {
    modalConfig: {
      type: Object,
      required: true,
    },
    defaultInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  setup(props: any) {
    const dialogVisible = ref(false);
    const formData = ref<any>({});
    watch(
      () => props.defaultInfo,

      (value) => {
        for (const item of props.modalConfig.formItems) {
          formData.value[item.field] = value[item.field];
        }
      }
    );
    return {
      dialogVisible,
      formData,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
