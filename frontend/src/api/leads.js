import http from "./http";

export const getLeadRequests = async () => {
  const { data } = await http.get("/api/leads/project-requests");
  return data;
};

export const createLeadRequest = async (payload) => {
  const { data } = await http.post("/api/leads/project-requests", payload);
  return data;
};

export const getContactLeads = async () => {
  const { data } = await http.get("/api/leads/contact-leads");
  return data;
};

export const createContactLead = async (payload) => {
  const { data } = await http.post("/api/leads/contact-leads", payload);
  return data;
};

export const getNewsletterSubscribers = async () => {
  const { data } = await http.get("/api/leads/newsletter-subscribers");
  return data;
};

export const subscribeToNewsletter = async (payload) => {
  const { data } = await http.post("/api/leads/newsletter-subscribers", payload);
  return data;
};
