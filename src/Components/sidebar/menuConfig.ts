import type { SidebarMenuItem } from "./types";

export const DASHBOARD_MAIN_MENU: SidebarMenuItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "home",
    defaultOpen: true,
    children: [
      { id: "overview-v1", label: "Overview v1", to: "/dashboard", exact: true },
      { id: "overview-v2", label: "Overview v2", to: "/dashboard/landing-v2" },
    ],
  },
  { id: "blog", label: "Blog", to: "/dashboard/blog", icon: "blog" },
  { id: "profile", label: "Profile", to: "/dashboard/profile", icon: "profile" },
  {
    id: "tables",
    label: "Tables",
    icon: "products",
    defaultOpen: true,
    children: [
      { id: "products", label: "Products", to: "/dashboard/products", icon: "products" },
      { id: "categories", label: "Categories", to: "/dashboard/categories", icon: "categories" },
      { id: "orders", label: "Orders", to: "/dashboard/orders", icon: "orders" },
      { id: "users", label: "Users", to: "/dashboard/users", icon: "users" },
      { id: "reviews", label: "Reviews", to: "/dashboard/reviews", icon: "reviews" },
    ],
  },
  {
    id: "forms",
    label: "Forms",
    icon: "categories",
    children: [
      { id: "create-product", label: "Add Product", to: "/dashboard/products/create-product" },
      { id: "create-category", label: "Add Category", to: "/dashboard/categories/create-category" },
      { id: "create-order", label: "Add Order", to: "/dashboard/orders/create-order" },
      { id: "create-user", label: "Add User", to: "/dashboard/users/create-user" },
      { id: "create-review", label: "Add Review", to: "/dashboard/reviews/create-review" },
    ],
  },
  {
    id: "notifications",
    label: "Notifications",
    to: "/dashboard/notifications",
    icon: "notifications",
  },
  {
    id: "auth",
    label: "Auth",
    icon: "auth",
    children: [
      { id: "login", label: "Login", to: "/dashboard/login", icon: "login" },
      { id: "register", label: "Register", to: "/dashboard/register", icon: "register" },
    ],
  },
];

export const DASHBOARD_FOOTER_MENU: SidebarMenuItem[] = [
  { id: "help-desk", label: "Help Desk", to: "/dashboard/help-desk", icon: "help" },
];
