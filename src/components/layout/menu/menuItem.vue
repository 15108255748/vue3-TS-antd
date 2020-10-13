
<!--
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-10-13 08:41:05
 * @LastEditors: pdc
 * @LastEditTime: 2020-10-13 10:19:38
-->
<template>
  <menu-item
    v-if="!isChildren"
    :key="menuItem.id"
  >
    {{ menuItem.menuName }}
  </menu-item>
  <sub-menu v-else :key="menuItem.id" v-bind="$props">
    <template v-slot:title
      ><span>{{ menuItem.menuName }}</span></template
    >
    <template v-for="item in menuItem.children" :key="item.id">
      <v-menu-item :menu-item="item"></v-menu-item>
    </template>
  </sub-menu>
</template>


<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Menu } from "ant-design-vue";
import { MenuItemType } from "./type";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
export default defineComponent({
  name: "vMenuItem",
  components: {
    MenuItem,
    SubMenu,
  },
  props: {
    menuItem: {
      type: Object as PropType<MenuItemType>,
    },
  },
  setup(props) {
    // 是否有子菜单
    const isChildren =
      props.menuItem &&
      props.menuItem.children &&
      props.menuItem.children.length;
    return {
      isChildren,
    };
  },
});
</script>