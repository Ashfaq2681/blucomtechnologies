import { useEffect, useState } from "react";
import { SidebarProvider, useSidebar } from "../context/SidebarContext";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AppHeader from "./AppHeader";
import Backdrop from "./Backdrop";
import AppSidebar from "./AppSidebar";
import {
  clearDashboardSession,
  getDashboardAdmin,
  getDashboardToken,
} from "../../../api/auth";

const LayoutContent: React.FC = () => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();

  return (
    <div className="dashboard-app min-h-screen xl:flex">
      <div>
        <AppSidebar />
        <Backdrop />
      </div>
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          isExpanded || isHovered ? "lg:ml-[290px]" : "lg:ml-[90px]"
        } ${isMobileOpen ? "ml-0" : ""}`}
      >
        <AppHeader />
        <div className="mx-auto max-w-(--breakpoint-2xl) p-4 pb-8 md:p-6 md:pb-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

const AppLayout: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<"checking" | "allowed" | "denied">(
    () => (getDashboardToken() ? "checking" : "denied"),
  );
  const location = useLocation();

  useEffect(() => {
    let mounted = true;

    async function verifyAdminSession() {
      const token = getDashboardToken();
      if (!token) {
        setAuthStatus("denied");
        return;
      }

      try {
        await getDashboardAdmin();
        if (mounted) {
          setAuthStatus("allowed");
        }
      } catch (error) {
        clearDashboardSession();
        if (mounted) {
          setAuthStatus("denied");
        }
      }
    }

    setAuthStatus(getDashboardToken() ? "checking" : "denied");
    void verifyAdminSession();

    return () => {
      mounted = false;
    };
  }, [location.pathname]);

  if (authStatus === "checking") {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50 text-sm font-medium text-slate-600">
        Checking admin access...
      </div>
    );
  }

  if (authStatus === "denied") {
    return (
      <Navigate
        to="/Dashboard/signin"
        replace
        state={{ from: `${location.pathname}${location.search}` }}
      />
    );
  }

  return (
    <SidebarProvider>
      <LayoutContent />
    </SidebarProvider>
  );
};

export default AppLayout;
