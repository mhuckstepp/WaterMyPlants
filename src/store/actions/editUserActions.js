import { axiosWithAuth } from "../../utils/axiosWithAuth";
export const EDIT_SUCCESS = "EDIT_SUCCESS";
export const EDIT_FAIL = "EDIT_FAIL";

export const editUserData = (user) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`/auth`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        dispatch({ type: EDIT_SUCCESS, payload: res.data.user });
      })
      .catch((err) => {
        dispatch({ type: EDIT_FAIL, payload: err });
      });
  };
};
