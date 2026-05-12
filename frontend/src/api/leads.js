const readJson = (key, fallback = []) => {
  try {
    return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback));
  } catch (_error) {
    return fallback;
  }
};

export const getLeadRequests = async () => readJson("projectRequests");

export const getContactLeads = async () => readJson("contactLeads");

export const getNewsletterSubscribers = async () => readJson("newsletterSubscribers");
