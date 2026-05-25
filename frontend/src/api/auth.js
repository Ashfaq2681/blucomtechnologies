import http from "./http";

const TOKEN_KEY = "dashboardAuthToken";
const USER_KEY = "dashboardAdminUser";

export const getDashboardToken = () => localStorage.getItem(TOKEN_KEY);

export const setDashboardSession = ({ token, user }) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(USER_KEY, JSON.stringify(user));
  localStorage.setItem("isAuthenticated", "true");
  localStorage.setItem("authToken", token);
  localStorage.setItem("token", token);
};

export const clearDashboardSession = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  localStorage.removeItem("isAuthenticated");
  localStorage.removeItem("token");
  localStorage.removeItem("authToken");
};

export const loginDashboardAdmin = async (payload) => {
  const { data } = await http.post("/api/auth/login", payload);
  return data;
};

export const getDashboardAdmin = async () => {
  const token = getDashboardToken();
  const { data } = await http.get("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};
