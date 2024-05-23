import { combineReducers } from "redux";

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
    // UPDATE_SESSION_EXPIRY,
} from "../Constant/login";

const initialState = {
    login: {
        token: "",
        user_id: 0,
        isLoggedIn: '',
        // user_type: '',
        account_type: '',
        profile: {},

        session_expiry: 0,
    },
    error: '',
    isFetching: false,
}

const login = (state = initialState.login, action) => {
    switch (action.type) {
        case REQUEST_SIGNUP:
            return {
                ...state,
                error: '',
            }
        case SUCCESS_SIGNUP:
            return {
                ...state,
                error: '',
            }
        case FAILURE_SIGNUP:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_LOGIN:
            return {
                ...state,
                error: '',
            }
        case SUCCESS_LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user_id: action.payload.id,
                // isLoggedIn: action.payload.isLoggedIn,
                // user_type: action.payload.user_type,
                account_type: action.payload.account_type,
                // profile: action.payload.profile,
                // session_expiry: action.payload.session_expiry,
                error: '',
            }
        case FAILURE_LOGIN:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_LOGOUT:
            return {
                ...state,
                error: "",
            }
        case SUCCESS_LOGOUT:
            return {
                ...state,
                token: "",
                user_id: '',
                isLoggedIn: '',
                // user_type: '',
                account_type: '',
                profile: {},
            }
        case FAILURE_LOGOUT:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_UPDATE_PROFILE:
            return {
                ...state,
                error: '',
            }
        case SUCCESS_UPDATE_PROFILE:
            return {
                ...state,
                profile: action.payload.profile,
            }
        case FAILURE_UPDATE_PROFILE:
            return {
                ...state,
                error: action.payload,
            }

        // case UPDATE_SESSION_EXPIRY:
        //     return {
        //         ...state,
        //         session_expiry: action.payload,
        //     }
        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        // case REQUEST_FETCH_ID:
        // case REQUEST_FETCH_PROFILE:
        case REQUEST_SIGNUP:
        case REQUEST_LOGIN:
        case REQUEST_LOGOUT:
        case REQUEST_UPDATE_PROFILE:
            return true;

        // case SUCCESS_FETCH_ID:
        // case SUCCESS_FETCH_PROFILE:
        // case FAILURE_FETCH_ID:
        // case FAILURE_FETCH_PROFILE:
        case SUCCESS_SIGNUP:
        case SUCCESS_LOGIN:
        case SUCCESS_LOGOUT:
        case SUCCESS_UPDATE_PROFILE:
        case FAILURE_SIGNUP:
        case FAILURE_LOGIN:
        case FAILURE_LOGOUT:
        case FAILURE_UPDATE_PROFILE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    login,
    isFetching,
});

// export const selectLoginIsFetching = state => state.isFetching;
// export const selectUserName = state => state.login.userName || '';
// export const selectExpiryTime = state => state.login.session_expiry;

// export const selectProfile = state => (state.login.profile && {
//     ...state.login.profile,
//     address: Array.isArray(state.login.profile.address) ? state.login.profile.address.join(', ') : ''
// }) || {};


export const selectUserID = state => state.login.user_id || '';
export const selectToken = state => state.login.token || '';
export const selectIsLoggedIn = state => (state.login.token !== '' && state.login.user_id !== '') ? true : false;

export const selectIsAdmin = state => (state.login.account_type === 'admin') ? true : false;
// console.log(selectIsAdmin);
export const selectProfile = state => state.login.profile;