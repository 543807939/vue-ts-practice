<template>
  <div class="user">
    <my-form v-bind="formConfig" :formData="formData"></my-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue";
import MyForm from "@/base-ui/form";
import formConfig from "./config/search.config";
export default defineComponent({
  components: {
    MyForm,
  },
  setup() {
    const formData = reactive({
      username: "",
      password: "",
      sport: "",
      createDate: "",
    });
    return {
      formConfig,
      formData,
    };
  },
});
</script>
<style lang="scss" scoped></style>
