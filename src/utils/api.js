import axios from "axios";

// Use env variable or fallback to same-origin
const API_URL = process.env.REACT_APP_API_URL || "";

const api = axios.create({
  baseURL: `${API_URL}/api`, // all requests prefixed with /api
  withCredentials: false,    // set true only if you use cookies/sessions
});

export default api;
