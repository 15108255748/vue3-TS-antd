<template>
  <div class="v3-menu">
    <Menu
      :defalut-selected-keys="defaultSelectedKeys"
      :default-open-keys="defaultOpenKeys"
      :mode="mode"
      :theme="theme"
      :inline-collapsed="inlineCollapsed"
    >
      <template v-for="(menuItem, index) in menuList" :key="index">
        <menu-item :menu-item="menuItem"></menu-item>
      </template>
    </Menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Menu } from "ant-design-vue";
import menuItem from "./menuItem.vue";
import { MenuItemType, ModeType, ThemeType } from "./type";
export default defineComponent({
  components: {
    Menu,
    menuItem,
  },
  props: {
    mode: {
      type: String as PropType<ModeType>,
      default: "inline",
    },
    theme: {
      type: String as PropType<ThemeType>,
      default: "dark",
    },
    menuList: {
      type: Array as PropType<Array<MenuItemType>>,
      default: () => [],
    },
    defaultSelectedKeys: {
      type: Array,
      default: () => [],
    },
    defaultOpenKeys: {
      type: Array,
      default: () => [],
    },
    inlineCollapsed: {
      type: Boolean,
    },
  },
  setup() {
    return {};
  },
});
</script>
