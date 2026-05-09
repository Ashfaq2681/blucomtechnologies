import axios from "axios";

// Use your PHP backend URL
const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost/backend/api",
});

// POST data to PHP
export const sendContact = (data) => API.post("/contact.php", data);

// Optional: if you make a PHP endpoint to fetch contacts
export const getContacts = () => API.get("/get_contacts.php");