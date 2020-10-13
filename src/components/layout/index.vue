<template>
  <div class="app-layout">
    <Layout class="v3-layout">
      <Sider
        class="v3-sider"
        v-model:collapsed="collapsed"
        :trigger="null"
        collapsible
        :width="width"
      >
        <div class="v3-logo">
          <span class="v3-logo-box">
            <Html5TwoTone
              twoToneColor="#fa541c"
              :style="{ fontSize: '36px' }"
            /> 
            <h1 class="v3-app-title">Vue3+</h1>
          </span>
        </div>
        <Menu :menu-list="menuList"></Menu>
      </Sider>
      <Layout class="v3-layout">
        <Header class="v3-header" :style="{ height: height }">
          <div>
            <MenuFoldOutlined />
          </div>
          <a-button type="primary" @click="changeCollapsed">点击切换</a-button>
        </Header>
        <Content class="v3-content">
          <h1>这是一个首页</h1>
          <h3 style="color: red">使用起来如德芙般丝滑</h3>
          <p>任何组件都在这个页面上显示</p>
        </Content>
        <Footer class="v3-footer"></Footer>
      </Layout>
    </Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Html5TwoTone } from "@ant-design/icons-vue";
import { Layout } from "ant-design-vue";
import Menu from "./menu/index.vue";
import { MenuItemType } from "./menu/type";
const Sider = Layout.Sider;
const Header = Layout.Header;
const Content = Layout.Content;
const Footer = Layout.Footer;
export default defineComponent({
  components: {
    Layout,
    Sider,
    Header,
    Content,
    Footer,
    Menu,
    Html5TwoTone,
  },
  setup() {
    const collapsed = ref(false);
    const changeCollapsed = (event: Event) => {
      event.preventDefault();
      collapsed.value = !collapsed.value;
    };
    const width = "256px";
    const height = "80px";
    const menuList: Array<MenuItemType> = [
      {
        id: "1",
        menuId: "1",
        menuName: "测试",
        routerName: "./",
        children: [
          {
            id: "1-2",
            menuId: "1-2",
            menuName: "测试1-2",
            routerName: "./",
            children: [
              {
                id: "1-2-1",
                menuId: "1-2-1",
                menuName: "测试1-2-1",
                routerName: "./",
                children: [
                  {
                    id: "1-2-1-1",
                    menuId: "1-2-1-1",
                    menuName: "测试1-2-1-1",
                    routerName: "./",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "2",
        menuId: "2",
        menuName: "测试2",
        routerName: "./",
        children: [],
      },
    ];
    return { menuList, width, height, collapsed, changeCollapsed };
  },
});
</script>
<style vars="{ height }" lang="less" scoped>
.app-layout {
  height: 100%;
  .v3-layout {
    height: 100%;
    .v3-header {
    }
  }
  .v3-logo {
    height: var(--height);
    // line-height: var(--height);
    padding-left: 24px;
    transition: all .3s;
    overflow: hidden;
    .v3-logo-box {
      display: flex;
      position: relative;
      top: 20px;
      .v3-app-title {
        margin-left: 20px;
        font-size: 26px;
        color: #fff;
      }
    }
  }
}
</style>