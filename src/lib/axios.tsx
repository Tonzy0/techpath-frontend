import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://techpath-backend.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default axiosInstance;
