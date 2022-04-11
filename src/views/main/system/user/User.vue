<template>
  <div class="user">
    <my-form v-bind="formConfig"></my-form>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import MyForm from "@/base-ui/form";
import formConfig from "./config/search.config";
export default defineComponent({
  components: {
    MyForm,
  },
  setup() {
    return {
      formConfig,
    };
  },
});
</script>
<style lang="scss" scoped></style>
