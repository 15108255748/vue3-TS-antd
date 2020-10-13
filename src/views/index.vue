<template>
  <div class="v3-app">
    <Layout></Layout>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "../components/layout/index.vue";
export default defineComponent({
  components: {
    Layout,
  },
});
</script>
<style lang="less" scoped>
.v3-app {
  height: 100vh;
}
</style>
