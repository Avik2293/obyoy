import axios from "axios";
import {
    requestSignup,
    signupSuccess,
    signupFailure,
    requestLogin,
    loginSuccess,
    loginFailure,
    requestLogout,
    logoutSuccess,
    logoutFailure,
    requestUpdateProfile,
    updateProfileSuccess,
    updateProfileFailure,
    // updateSessionExpiry,
} from "../../ActionCreator/login";

import { BASE_URL } from "../../Constant/login";

export const signup = (firstName, lastName, email, password) => async (dispatch, getState) => {
    dispatch(requestSignup())

    axios.post(BASE_URL + "/api/v1/users/registration", {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        account_type: 'admin',
    })
        .then((response) => {
            dispatch(signupSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(signupFailure(error));
            // console.log(error);
        })
}

export const login = (email, password) => async (dispatch, getState) => {
    dispatch(requestLogin())

    axios.post(BASE_URL + "/api/v1/users/login", {
        email: email,
        password: password,
        account_type: 'admin',
    })
        .then((response) => {
            dispatch(loginSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(loginFailure(error))
        })
}

export const logout = (user_id, token) => async (dispatch, getState) => {
    dispatch(logoutSuccess());
    // dispatch(requestLogout())

    // axios.post(BASE_URL + "/api/v1/users/logout", {
    // user_id: user_id,
    // }, {
    // headers: {
    // 'Authorization': token,
    // },
    // })
    // .then((response) => {
    // dispatch(logoutSuccess(response.data));
    // dispatch(updateSessionExpiry(nextDate));
    // }, error => {
    // dispatch(logoutFailure(error))
    // })
}

export const profileUpdate = (userName, user_email, user_phone, address, birthday, token) => async (dispatch, getState) => {
    dispatch(requestUpdateProfile())

    axios.post("/api/v1/profile_edit", {
        userName: userName,
        user_email: user_email,
        user_phone: user_phone,
        address: address,
        birthday: birthday,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(updateProfileSuccess(response.data));
        }, error => {
            dispatch(updateProfileFailure(error))
        })
}
