import {
    // REQUEST_LOGIN,
    // SUCCESS_LOGIN,
    // FAILURE_LOGIN,
    // SUCCESS_LOGOUT,
    REQUEST_UPDATE_PROFILE,
    SUCCESS_UPDATE_PROFILE,
    FAILURE_UPDATE_PROFILE,
    // UPDATE_SESSION_EXPIRY,
} from "../Constant/login";

// export const requestLogin = () => ({
//     type : REQUEST_LOGIN,
// })

// export const loginSuccess = (token) => ({
//     type: SUCCESS_LOGIN,
//     payload: token,
// })

// export const loginFailure = () => ({
//     type : FAILURE_LOGIN,
// })

// export const logout = () => ({
//     type: SUCCESS_LOGOUT,
// })

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
