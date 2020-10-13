/*
 * @Descripttion: 
 * @version: 1.0
 * @Author: pdc
 * @Date: 2020-10-12 10:16:08
 * @LastEditors: pdc
 * @LastEditTime: 2020-10-13 15:37:08
 */
import type { App } from 'vue'
import { Button } from 'ant-design-vue';

export function setupAntdUI(app: App<Element>) {
  app.use(Button);
}