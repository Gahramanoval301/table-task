import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 400:
          console.error("Bad Request");
          break;
        case 401:
          console.error("Unauthorized");
          break;
        case 403:
          console.error("Forbidden");
          break;
        case 404:
          console.error("Not Found");
          break;
        case 500:
          console.error("Internal Server Error");
          break;
        default:
          console.error(`Error ${status}`);
      }
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Request setup error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
