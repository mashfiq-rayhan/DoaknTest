import axios from "axios";

import * as actionTypes from "../actionTypes";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId,
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const authSignup = (
  firstName,
  lastName,
  email,
  password,
  phoneNumber,
  nid,
  gender,
  birthday
) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      status: 1,
      phoneNumber: phoneNumber,
      nid: nid,
      gender: gender,
      birthday: birthday,
    };
    const url = "http://localhost:5000/signup";
    axios
      .post(url, authData)
      .then((response) => {
        console.log(response);
        // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
        // localStorage.setItem('token', response.data.idToken);
        // localStorage.setItem('expirationDate', expirationDate);
        // localStorage.setItem('userId', response.data.localId);
        // console.log(response.data.idToken);
        // console.log('--------------');
        // console.log('---------------');
        // console.log('---------------');
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const authLogin = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };

    const url = "http://localhost:5000/login";

    axios
      .post(url, authData)
      .then((response) => {
        console.log(response.data);
        // const expirationDate = new Date(
        //   new Date().getTime() + response.data.expiresIn * 1000
        // );
        // localStorage.setItem("token", response.data.idToken);
        // localStorage.setItem("expirationDate", expirationDate);
        // localStorage.setItem("userId", response.data.localId);
        // console.log(response.data.idToken);
        // console.log("--------------");
        // console.log("---------------");
        // console.log("---------------");
        // console.log(response.data.localId);
        // dispatch(authSuccess(response.data.idToken, response.data.localId));
        // dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path,
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");
        dispatch(authSuccess(token, userId));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
