const DASHBOARD_AUTH_KEY = "isAuthenticated";

export const isDashboardAuthenticated = () => {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(DASHBOARD_AUTH_KEY) === "true";
};

export const setDashboardAuthenticated = (value: boolean) => {
  if (typeof window === "undefined") {
    return;
  }

  if (value) {
    window.localStorage.setItem(DASHBOARD_AUTH_KEY, "true");
    return;
  }

  window.localStorage.removeItem(DASHBOARD_AUTH_KEY);
};

export const getDashboardEntryPath = () =>
  isDashboardAuthenticated() ? "/dashboard" : "/";
