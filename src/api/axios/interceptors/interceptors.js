import axios from 'axios';
import history from "../../../helpers/history"

let refreshTokenPromise;

export const createAuthHeaderInterceptor = (accessToken) => (config) => {    
  if (accessToken) {
    config.headers.Authorization = accessToken;
  } else {
    delete config.headers.Authorization;
  }
  return config;
};

export const createRefreshInterceptor = (refreshToken, http) => async (error) => {
  debugger
  if (error.response.status !== 401) {
    return Promise.reject(error);
  }

  if (!refreshTokenPromise) {
    refreshTokenPromise = axios
      .post(`http://${window.location.hostname}:4000/auth/refresh`, {
        refreshToken: refreshToken,
      })
      .then((result) => {
        localStorage.setItem("accessToken", result.data.accessToken);
        localStorage.setItem("refreshToken", result.data.refreshToken); 
        console.log("all good", result.data.accessToken) 
      })
      .catch((e) => {
        console.log(e);
        localStorage.setItem("accessToken", null);
        localStorage.setItem("refreshToken", null);  
        history.push('/signin');
        return Promise.reject(e);
      });
  }

  await refreshTokenPromise;
  refreshTokenPromise = null;

  return http(error.config);
};
