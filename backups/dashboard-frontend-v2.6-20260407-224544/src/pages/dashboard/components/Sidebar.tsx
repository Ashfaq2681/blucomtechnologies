import { useMemo, useState } from "react";
import { HiOutlineChevronDown, HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";
import {
  DASHBOARD_FOOTER_MENU,
  DASHBOARD_MAIN_MENU,
} from "../../../components/sidebar/menuConfig";
import { sidebarIconMap } from "../../../components/sidebar/iconMap";
import type { SidebarMenuItem } from "../../../components/sidebar/types";
import { setSidebar } from "../features/dashboard/dashboardSlice";
import { useAppDispatch, useAppSelector } from "../hooks";

const isPathActive = (item: SidebarMenuItem, pathname: string): boolean => {
  const selfActive = item.to
    ? item.exact
      ? pathname === item.to
      : pathname === item.to || pathname.startsWith(`${item.to}/`)
    : false;

  if (selfActive) {
    return true;
  }

  if (item.children?.length) {
    return item.children.some((child) => isPathActive(child, pathname));
  }

  return false;
};

const buildInitialOpenState = (
  items: SidebarMenuItem[],
  pathname: string,
  state: Record<string, boolean> = {},
) => {
  items.forEach((item) => {
    if (!item.children?.length) {
      return;
    }

    const shouldOpen = item.defaultOpen || item.children.some((child) => isPathActive(child, pathname));
    state[item.id] = shouldOpen;
    buildInitialOpenState(item.children, pathname, state);
  });

  return state;
};

const Sidebar = () => {
  const { pathname } = useLocation();
  const { isSidebarOpen } = useAppSelector((state) => state.dashboard);
  const dispatch = useAppDispatch();

  const showText = isSidebarOpen;
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>(() =>
    buildInitialOpenState(DASHBOARD_MAIN_MENU, pathname),
  );

  const menuState = useMemo(() => {
    const next = { ...openMenus };
    buildInitialOpenState(DASHBOARD_MAIN_MENU, pathname, next);
    return next;
  }, [openMenus, pathname]);

  const navBaseClass =
    "group relative flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors";
  const navActiveClass =
    "bg-blue-50 text-blue-600 dark:bg-blue-500/15 dark:text-blue-300";
  const navInactiveClass =
    "text-gray-700 hover:bg-gray-100 dark:text-gray-700 dark:hover:bg-gray-200";

  const toggleMenu = (id: string) => {
    setOpenMenus((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const renderMenuItems = (items: SidebarMenuItem[], depth = 0) =>
    items.map((item) => {
      const Icon = item.icon ? sidebarIconMap[item.icon] : null;
      const hasChildren = Boolean(item.children?.length);
      const expanded = menuState[item.id];
      const isActive = isPathActive(item, pathname);

      if (hasChildren) {
        return (
          <li key={item.id}>
            <button
              type="button"
              onClick={() => toggleMenu(item.id)}
              className={`${navBaseClass} w-full justify-between ${
                isActive ? navActiveClass : navInactiveClass
              }`}
            >
              <span className="flex items-center gap-3">
                {Icon ? <Icon className="text-lg" /> : null}
                <span className={showText ? "block" : "hidden"}>{item.label}</span>
              </span>
              {showText ? (
                <HiOutlineChevronDown
                  className={`text-sm transition-transform ${expanded ? "rotate-180" : "rotate-0"}`}
                />
              ) : null}
            </button>
            {expanded && showText ? (
              <ul className={`mt-1 flex flex-col gap-1 ${depth === 0 ? "pl-5" : "pl-4"}`}>
                {renderMenuItems(item.children!, depth + 1)}
              </ul>
            ) : null}
          </li>
        );
      }

      return (
        <li key={item.id}>
          <NavLink
            to={item.to || "#"}
            end={item.exact}
            className={({ isActive: linkActive }) =>
              `${navBaseClass} ${linkActive ? navActiveClass : navInactiveClass}`
            }
          >
            {Icon ? <Icon className="text-lg" /> : null}
            <span className={showText ? "block" : "hidden"}>{item.label}</span>
          </NavLink>
        </li>
      );
    });

  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-black/40 transition-opacity lg:hidden ${
          isSidebarOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => dispatch(setSidebar())}
      />
      <aside
        className={`sidebar fixed top-0 left-0 z-40 flex h-screen flex-col overflow-hidden border-r border-gray-200 bg-white px-4 pt-6 transition-all duration-300 dark:border-gray-300 dark:bg-gray-100 lg:sticky lg:translate-x-0 ${
          isSidebarOpen
            ? "w-[290px] translate-x-0"
            : "w-[290px] -translate-x-full lg:w-[90px] lg:translate-x-0"
        }`}
      >
        <div
          className={`mb-6 flex items-center ${
            showText ? "justify-between" : "justify-center"
          }`}
        >
          <NavLink to="/dashboard" className="flex items-center gap-2">
            {showText ? (
              <>
                <img
                  className="h-8 dark:hidden"
                  src="/dashboard-assets/logo/logo.svg"
                  alt="Blucom"
                />
                <img
                  className="hidden h-8 dark:block"
                  src="/dashboard-assets/logo/logo-dark.svg"
                  alt="Blucom"
                />
              </>
            ) : (
              <img
                className="h-8 w-8"
                src="/dashboard-assets/logo/logo-icon.svg"
                alt="Blucom"
              />
            )}
          </NavLink>
          <button
            type="button"
            className="rounded-lg p-1 text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 lg:hidden"
            onClick={() => dispatch(setSidebar())}
          >
            <HiOutlineX className="text-xl" />
          </button>
        </div>

        <div className="no-scrollbar flex flex-1 flex-col overflow-y-auto">
          <h3 className={`mb-3 px-3 text-xs uppercase text-gray-400 ${showText ? "block" : "hidden lg:hidden"}`}>
            Menu
          </h3>
          <ul className="mb-6 flex flex-col gap-1">{renderMenuItems(DASHBOARD_MAIN_MENU)}</ul>
        </div>

        <div className="mb-4 border-t border-gray-200 pt-4 dark:border-gray-800">
          <ul className="flex flex-col gap-1">{renderMenuItems(DASHBOARD_FOOTER_MENU)}</ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
