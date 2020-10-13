/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-10-12 10:10:56
 * @LastEditors: pdc
 * @LastEditTime: 2020-10-13 15:05:16
 */
import 'amfe-flexible';
import 'default-passive-events';
import { createApp } from 'vue'
import App from './App.vue'
import { setupAntdUI } from './plugins/antd';
import router, { setupRouter } from './router'
import { setupStore } from './store'
import './assets/less/index.less';

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
