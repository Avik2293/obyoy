import {
    REQUEST_LOGIN,
    SUCCESS_LOGIN,
    FAILURE_LOGIN,
    SUCCESS_LOGOUT,
    UPDATE_SESSION_EXPIRY,
} from "../Constant/login";
 
export const requestLogin = () => ({
    type : REQUEST_LOGIN,
})
 
export const loginSuccess = (token) => ({
    type: SUCCESS_LOGIN,
    payload: token,
})
 
export const loginFailure = () => ({
    type : FAILURE_LOGIN,
})
 
export const logout = () => ({
    type: SUCCESS_LOGOUT,
})
 
export const updateSessionExpiry = (nextDay) => ({
    type: UPDATE_SESSION_EXPIRY,
    payload: nextDay,
})
