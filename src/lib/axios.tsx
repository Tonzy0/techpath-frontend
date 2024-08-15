import axios from "axios";
const tokens = JSON.parse(localStorage.getItem("tokens") as string);

const axiosInstance = axios.create({
  baseURL: "https://techpath-backend.onrender.com",
  // baseURL: "http://localhost:8080",
  headers: {
    Authorization: tokens ? `Bearer ${tokens.accessToken}` : "",
  },
});

export default axiosInstance;
