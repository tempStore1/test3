import axios from "axios";
import { notification } from "antd";

const instance = axios.create({
  baseURL: process.env.API_PATH,
  timeout: 20000,
});

// instance.defaults.baseURL = process.env.API_PATH;
// instance.defaults.timeout = 20000;

instance.interceptors.request.use(
  (config) => {
    // 篩選出 token
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (config) => {
    return config;
  },
  // 跑 catch
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          break;
        case 403:
          notification.error({
            message: "錯誤",
            description: "403-伺服器連線錯誤，請聯絡IT人員",
            duration: 5000,
          });
          break;
        case 404:
          notification.error({
            message: "錯誤",
            description: "404-無法找到此網址，請聯絡IT人員",
            duration: 5000,
          });
          break;
        case 405:
          notification.error({
            message: "錯誤",
            description: "405 Error",
            duration: 5000,
          });
          break;
        case 415:
          notification.error({
            message: "錯誤",
            description: "415 Error",
            duration: 5000,
          });
          break;
        case 500:
          notification.error({
            message: "錯誤",
            description: "500-系統程式發生錯誤，請聯絡程式人員",
            duration: 5000,
          });
          break;
      }
    } else {
      notification.error({
        message: "錯誤",
        description: "CORS-系統連不上，請確認網路狀況與環境問題",
        duration: 5000,
      });
    }
    return Promise.reject(error);
  }
);

const ApiService = {
  get(url: string) {
    return instance
      .get(url)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        console.error(error);
      });
  },
};

export default ApiService;
