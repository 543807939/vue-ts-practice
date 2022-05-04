import { ref } from "vue";
import PageModal from "@/components/page-modal";
type callbackFn = (item?: any) => void;
export function usePageModal(
  newCallback?: callbackFn,
  editCallback?: callbackFn
) {
  const defaultInfo = ref({});

  const pageModalRef = ref<InstanceType<typeof PageModal>>();

  // 新增数据
  const handleNewData = () => {
    defaultInfo.value = {};
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    newCallback && newCallback();
  };
  // 编辑数据
  const handleEditData = (item: any) => {
    defaultInfo.value = { ...item };
    if (pageModalRef.value) {
      pageModalRef.value.dialogVisible = true;
    }
    console.log(item);

    editCallback && editCallback(item);
  };
  return {
    defaultInfo,
    pageModalRef,
    handleNewData,
    handleEditData,
  };
}
