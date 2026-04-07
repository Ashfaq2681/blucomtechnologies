export type SidebarIconName =
  | "home"
  | "blog"
  | "profile"
  | "products"
  | "categories"
  | "orders"
  | "users"
  | "reviews"
  | "notifications"
  | "auth"
  | "login"
  | "register"
  | "help";

export type SidebarMenuItem = {
  id: string;
  label: string;
  to?: string;
  icon?: SidebarIconName;
  exact?: boolean;
  defaultOpen?: boolean;
  children?: SidebarMenuItem[];
};
