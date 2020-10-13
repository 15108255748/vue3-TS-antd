// 菜單
export interface MenuItemType {
  id: string;
  menuId: string;
  menuName: string;
  routerName: string | undefined;
  children?: Array<MenuType> | undefined;
}

// 模式
export type ModeType = 'vertical' | 'vertical-right' | 'horizontal' | 'inline';

// 主題
export type ThemeType = 'light' | 'dark';