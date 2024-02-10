import { combineReducers } from "redux";

import {
    FAILURE_FETCH_ID,
    FAILURE_FETCH_PROFILE,
    FAILURE_LOGIN,
    FAILURE_LOGOUT,
    REQUEST_FETCH_ID,
    REQUEST_FETCH_PROFILE,
    REQUEST_LOGIN,
    REQUEST_LOGOUT,
    SUCCESS_FETCH_ID,
    SUCCESS_FETCH_PROFILE,
    SUCCESS_LOGIN,
    SUCCESS_LOGOUT,
    UPDATE_SESSION_EXPIRY,
} from "../Constant/login";

const initialState = {
    login: {
        token: "",
        user_id: "",
        userName: "Tarif Ezaz",
        profile: "",
        session_expiry: 0,
    },
    isFetching: false,
}

const login = (state = initialState.login, action) => {
    switch (action.type) {
        case SUCCESS_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user_id: action.payload.id,
            }
        case REQUEST_LOGIN:
            return {
                ...state,
                token: '',
                id: '',
                userName: action.user_name
            }
        case SUCCESS_FETCH_ID:
            return {
                ...state,
            }
        case SUCCESS_FETCH_PROFILE:
            return {
                ...state,
                profile: action.response
            }
        case SUCCESS_LOGOUT:
            return {
                ...state,
                profile: {},
                token: "",
                id: '',
                userName: '',
                session_expiry: 0,
            }
        case UPDATE_SESSION_EXPIRY:
            return {
                ...state,
                session_expiry: action.payload,
            }
        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_LOGIN:
        case REQUEST_LOGOUT:
        case REQUEST_FETCH_ID:
        case REQUEST_FETCH_PROFILE:
            return true;
        case SUCCESS_LOGIN:
        case SUCCESS_LOGOUT:
        case SUCCESS_FETCH_ID:
        case SUCCESS_FETCH_PROFILE:
        case FAILURE_FETCH_PROFILE:
        case FAILURE_FETCH_ID:
        case FAILURE_LOGIN:
        case FAILURE_LOGOUT:
            return false;
        default:
            return state;
    }
};

export default combineReducers({
    login,
    isFetching,
});

export const selectLoginIsFetching = state => state.isFetching;
export const selectToken = state => state.login.token || '';
export const selectUserName = state => state.login.userName || '';
export const selectUserID = state => state.login.user_id || '';
export const selectExpiryTime = state => state.login.session_expiry;

export const selectProfile = state => (state.login.profile && {
    ...state.login.profile,
    address: Array.isArray(state.login.profile.address) ? state.login.profile.address.join(', ') : ''
}) || {};

export const selectIsLoggedIn = state => (state.login.token !== '' && state.login.user_id !== '') ? true : false;