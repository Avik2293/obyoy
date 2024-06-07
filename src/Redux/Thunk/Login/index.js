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
import { login_url, logout_url, profileUpdate_url, signup_url } from "../../../allApiPath";


export const signup = (firstName, lastName, email, password) => async (dispatch, getState) => {
    dispatch(requestSignup())

    axios.post(signup_url, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
        account_type: 'translator',
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

    axios.post(login_url, {
        email: email,
        password: password,
        // account_type: 'admin',
        // account_type: 'translator',
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

    // axios.post(logout_url, {
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

    axios.post(profileUpdate_url, {
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
