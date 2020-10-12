import 'amfe-flexible';
import { createApp } from 'vue'
import App from './App.vue'
import { setupAntdUI } from './plugins/antd';
import router, { setupRouter } from './router'
import { setupStore } from './store'

const app = createApp(App);

// ui
setupAntdUI(app);
// router
setupRouter(app);
// store
setupStore(app);

// 准备
router.isReady().then(() => {
  app.mount('#app');
});
