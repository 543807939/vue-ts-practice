import PageContent from "@/components/page-content";
import { ref } from "vue";

export function userPageSearch() {
  const pageContentRef = ref<InstanceType<typeof PageContent>>();

  const handleResetClick = () => {
    console.log("重置了,开心不");
  };
  const handleSearchClick = (formData: any) => {
    pageContentRef.value?.getPageData(formData);
  };
  return {
    handleResetClick,
    pageContentRef,
    handleSearchClick,
  };
}
