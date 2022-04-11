<template>
  <div class="navmenu">
    <div class="logo">
      <img src="@/assets/image/logo.svg" />
      <span class="title">vue3+typescript练习</span>
    </div>
    <el-menu
      :collapse="collapse"
      :default-active="defaultActive"
      background-color="#485460"
      text-color="#fff"
      unique-opened
    >
      <template v-for="item in menuList" :key="item.id" :index="item.id + ''">
        <el-sub-menu v-if="item.type == 1" :index="item.id + ''">
          <template #title>
            <el-icon
              ><component
                :is="
                  item.icon
                    .split('-')
                    .slice(2)
                    .map(
                      (item) => item.charAt(0).toUpperCase() + item.substring(1)
                    )
                    .join('')
                "
              ></component
            ></el-icon>
            <span>{{ item.name }} </span>
          </template>
          <el-menu-item
            v-for="childItem in item.children"
            :index="childItem.id + ''"
            @click="handleItemClick(childItem)"
            :key="childItem.id"
          >
            <span>{{ childItem.name }}</span>
          </el-menu-item>
        </el-sub-menu>
        <el-menu-item v-else :index="item.id + ''">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { IStore } from "@/store/types";
import { useRouter, useRoute } from "vue-router";
import {
  Monitor,
  Setting,
  Goods,
  ChatLineRound,
} from "@element-plus/icons-vue";
import { pathMapToMenu } from "@/utils/map-menus";

export default defineComponent({
  components: { Monitor, Setting, Goods, ChatLineRound },
  props: {
    collapse: {
      type: Boolean,
      default() {
        return false;
      },
    },
  },
  setup() {
    const store = useStore<IStore>();
    // 获取菜单
    const menuList = store.state.loginModule.userMenus;
    console.log(menuList);

    const defaultActive = ref("2");
    const router = useRouter();
    // 处理点击事件
    const handleItemClick = (item: any) => {
      router.push(item.url);
    };
    const route = useRoute();
    const res = pathMapToMenu(menuList, route.path);
    console.log(res);

    defaultActive.value = res.id + "";

    return {
      menuList,
      defaultActive,
      handleItemClick,
    };
  },
});
</script>
<style lang="scss" scoped>
.logo {
  height: 28px;
  line-height: 28px;
  img {
    height: 100%;
    margin: 5px 10px;
    vertical-align: middle;
  }
  .title {
    color: #fff;
  }
}
.el-menu {
  border-right: none;
}
::v-deep .el-sub-menu__title {
  padding: 20px 12px !important;
}
// ::v-deep .el-menu {
//   background-color: #485460 !important;
// }
</style>
