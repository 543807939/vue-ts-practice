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
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleConfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { useStore } from "vuex";
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
    otherInfo: {
      type: Object,
      default() {
        return {};
      },
    },
    pageName: {
      type: String,
      required: true,
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
    const store = useStore();
    const handleConfirmClick = () => {
      dialogVisible.value = false;
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch("systemModule/editPageDataAction", {
          pageName: props.pageName,
          editData: { ...formData.value, ...props.otherInfo },
          id: props.defaultInfo.id,
        });
      } else {
        // 新建
        store.dispatch("systemModule/createPageDataAction", {
          pageName: props.pageName,
          newData: { ...formData.value, ...props.otherInfo },
        });
      }
    };
    return {
      dialogVisible,
      formData,
      handleConfirmClick,
    };
  },
});
</script>
<style lang="scss" scoped>
</style>
