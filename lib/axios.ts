import axios from "axios";

export const AGENT_API = "https://api.admin.caremall.in/api/v1";
// export const AGENT_API = "http://localhost:3000/api/v1/";

const axiosAdmin = axios.create({
  baseURL: AGENT_API,
});

axiosAdmin.interceptors.request.use(
  (config) => {
    if (
      !config?.url?.includes("/login") &&
      !config?.url?.includes("/register")
    ) {
      const storage = localStorage.getItem("auth-storage");
      let token: string | null = null;

      if (storage) {
        try {
          const parsed = JSON.parse(storage);
          token = parsed?.state?.accessToken ?? null;
        } catch (err) {
          console.error("Failed to parse auth-storage:", err);
        }
      }

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error: any) => Promise.reject(error)
);

axiosAdmin.interceptors.response.use(
  (response) => response,
  (error) => {
    // If token expired or unauthorized
    if (error.response?.status === 401) {
      localStorage.removeItem("auth-storage");
    }

    return Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    );
  }
);

export { axiosAdmin };