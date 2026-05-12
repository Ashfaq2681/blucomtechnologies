import axios from "axios";

const configuredBaseUrl =
  import.meta.env.VITE_API_BASE_URL ||
  import.meta.env.VITE_API_URL ||
  "http://localhost:4000";

const baseURL = configuredBaseUrl.replace(/\/api\/?$/, "");

const http = axios.create({
  baseURL,
});

export default http;
