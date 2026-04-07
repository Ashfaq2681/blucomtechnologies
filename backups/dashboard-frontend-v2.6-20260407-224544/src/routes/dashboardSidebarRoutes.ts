import {
  DASHBOARD_FOOTER_MENU,
  DASHBOARD_MAIN_MENU,
} from "../components/sidebar/menuConfig";
import type { SidebarMenuItem } from "../components/sidebar/types";

const flattenSidebarRoutes = (items: SidebarMenuItem[]): string[] => {
  return items.reduce<string[]>((acc, item) => {
    if (item.to) {
      acc.push(item.to);
    }
    if (item.children?.length) {
      acc.push(...flattenSidebarRoutes(item.children));
    }
    return acc;
  }, []);
};

export const dashboardSidebarRoutes = flattenSidebarRoutes([
  ...DASHBOARD_MAIN_MENU,
  ...DASHBOARD_FOOTER_MENU,
]);
