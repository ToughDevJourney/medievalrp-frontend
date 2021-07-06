import axios from "axios";
import history from "../../helpers/history";
import {
  createAuthHeaderInterceptor,
  createRefreshInterceptor,
} from "./interceptors/interceptors";

export let setInterceptors = () => {
  let authHeaderInterceptor = createAuthHeaderInterceptor(
    localStorage.getItem("accessToken")
  );
  axios.interceptors.request.use(authHeaderInterceptor);

  let refreshInteceptor = createRefreshInterceptor(
    localStorage.getItem("refreshToken"),
    axios
  );
  axios.interceptors.response.use(null, refreshInteceptor);
};

export let signup = (signupInfo) => {
  debugger;
  axios
    .post(`http://${window.location.hostname}:4000/auth/signup`, {
      email: signupInfo.email,
      password: signupInfo.password,
      nickname: signupInfo.nickname,
    })
    .then(() => {
      history.push("/signin");
    })
    .catch((e) => {
      console.log(e);
    });
};

export let signin = (signinInfo) => {
  debugger;
  axios
    .post(`http://${window.location.hostname}:4000/auth/signin`, {
      email: signinInfo.email,
      password: signinInfo.password,
    })
    .then((result) => {
      localStorage.setItem("accessToken", result.data.accessToken);
      localStorage.setItem("refreshToken", result.data.refreshToken);
      history.push("/");
    })
    .catch((e) => {
      console.log(e);
    });
};
