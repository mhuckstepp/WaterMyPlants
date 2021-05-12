import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const LOG_IN_START = "LOG_IN_START";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAIL = "LOG_IN_FAIL";
export const FETCH_USER = "FETCH_USER";
export const SIGNIN_IN_START = "SIGNIN_IN_START";
export const SIGNIN_IN_SUCCESS = "SIGNIN_IN_SUCCESS";
export const SIGNIN_IN_FAIL = "SIGNIN_IN_FAIL";

export const SIGN_OUT = "SIGN_OUT";

export const setUserData = (user) => {
  return (dispatch) => {
    dispatch({ type: LOG_IN_START });
    axios
      .post("https://mywaterplants.herokuapp.com/api/auth/login", user)
      .then((res) => {
        // console.log(res.data);
        localStorage.setItem("token", res.data.token);
        dispatch({ type: LOG_IN_SUCCESS });
      })
      .catch((err) => {
        console.log(err)
        dispatch({ type: LOG_IN_FAIL, payload: 'fail' });
      });
  };
};

export const fetchUser = (user) => {
  return (dispatch) => {
    axiosWithAuth()
      .get("/auth")
      .then((res) => {
        dispatch({ type: FETCH_USER, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGNIN_IN_FAIL, payload: err });
      });
  };
};

export const signInFunc = (user) => {
  return (dispatch) => {
    dispatch({ type: SIGNIN_IN_START });
    axios
      .post("https://mywaterplants.herokuapp.com/api/auth/register", user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: SIGNIN_IN_SUCCESS });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SIGNIN_IN_FAIL, payload: err });
      });
  };
};

export const signOutFunc = (user) => {
  localStorage.removeItem("token");
  return { type: SIGN_OUT };
};
