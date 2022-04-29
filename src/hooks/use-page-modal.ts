import { ref } from "vue";
import PageModal from "@/components/page-modal";
type callbackFn = () => void;
export function usePageModal(
  newCallback?: callbackFn,
  editCallback?: callbackFn
) {
  const defaultInfo = ref({});

  const pageModalRef = ref<InstanceType<typeof PageModal>>();

  // 新增数据
  const handleNewData = () => {
    defaultInfo.value = {};
    console.log("新增,user组件");
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    newCallback && newCallback();
  };
  // 编辑数据
  const handleEditData = (item: any) => {
    console.log(item, "user组件");
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    editCallback && editCallback();
  };
  return {
    defaultInfo,
    pageModalRef,
    handleNewData,
    handleEditData,
  };
}
