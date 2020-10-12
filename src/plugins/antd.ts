import type { App } from 'vue'
import { Button } from 'ant-design-vue';

export function setupAntdUI(app: App<Element>) {
  app.use(Button);
}