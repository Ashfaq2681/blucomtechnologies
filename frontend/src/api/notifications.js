const STORAGE_KEY = "dashboardNotifications";

const defaultNotifications = [
  {
    id: "welcome",
    type: "System",
    title: "Dashboard ready",
    message: "Your dashboard has been integrated.",
    link: "/dashboard",
    createdAt: new Date().toISOString(),
    isRead: false,
  },
];

const readNotifications = () => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || JSON.stringify(defaultNotifications));
  } catch (_error) {
    return defaultNotifications;
  }
};

export const getNotifications = async () => readNotifications();

export const markAllNotificationsRead = async () => {
  const updated = readNotifications().map((item) => ({ ...item, isRead: true }));
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  return updated;
};
