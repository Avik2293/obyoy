import {
    REQUEST_SIGNUP,
    SUCCESS_SIGNUP,
    FAILURE_SIGNUP,
    REQUEST_LOGIN,
    SUCCESS_LOGIN,
    FAILURE_LOGIN,
    REQUEST_LOGOUT,
    SUCCESS_LOGOUT,
    FAILURE_LOGOUT,
    REQUEST_UPDATE_PROFILE,
    SUCCESS_UPDATE_PROFILE,
    FAILURE_UPDATE_PROFILE,
} from "../Constant/login";


export const requestSignup = () => ({
    type : REQUEST_SIGNUP,
})
export const signupSuccess = (data) => ({
    type: SUCCESS_SIGNUP,
    payload: data,
})
export const signupFailure = (error) => ({
    type : FAILURE_SIGNUP,
    payload: error,
})

export const requestLogin = () => ({
    type : REQUEST_LOGIN,
})
export const loginSuccess = (data) => ({
    type: SUCCESS_LOGIN,
    payload: data.logins[0],
})
export const loginFailure = (error) => ({
    type : FAILURE_LOGIN,
    payload: error,
})

export const requestLogout = () => ({
    type : REQUEST_LOGOUT,
})
export const logoutSuccess = (data) => ({
    type: SUCCESS_LOGOUT,
    payload: data,
})
export const logoutFailure = (error) => ({
    type : FAILURE_LOGOUT,
    payload: error,
})

export const requestUpdateProfile = () => ({
    type: REQUEST_UPDATE_PROFILE,
    // payload: token,
})
export const updateProfileSuccess = (data) => ({
    type: SUCCESS_UPDATE_PROFILE,
    payload: data.logins[0],
})
export const updateProfileFailure = (error) => ({
    type: FAILURE_UPDATE_PROFILE,
    payload: error,
})

// export const updateSessionExpiry = (nextDay) => ({
//     type: UPDATE_SESSION_EXPIRY,
//     payload: nextDay,
// })
