import { combineReducers } from "redux";

import {
    // REQUEST_LOGIN,
    // SUCCESS_LOGIN,
    // FAILURE_LOGIN,
    // REQUEST_LOGOUT,
    // SUCCESS_LOGOUT,
    // FAILURE_LOGOUT,
    // REQUEST_FETCH_ID,
    // SUCCESS_FETCH_ID,
    // FAILURE_FETCH_ID,
    // REQUEST_FETCH_PROFILE,
    // SUCCESS_FETCH_PROFILE,
    // FAILURE_FETCH_PROFILE,
    REQUEST_UPDATE_PROFILE,
    SUCCESS_UPDATE_PROFILE,
    FAILURE_UPDATE_PROFILE,
    // UPDATE_SESSION_EXPIRY,
} from "../Constant/login";

const initialState = {
    login: {
        token: "1|233764s455teu8",
        user_id: 2234,
        isLoggedIn: true,
        user_type: 'translator',
        // user_type: 'admin',
        profile: {
            user_id: 2234,
            userName: "Tarif Ezaz",
            user_email: "tarif_ezaz@test.com",
            user_password: "123456789",
            user_phone: "+8801723456789",
            join_date: "23 May, 2021",
            birthday: "22 March, 1993",
            address: "Bashundhara, Dhaka, Bangladesh",
            total_working_days: 435,
            leaderboard_place: 45,
            total_balance: 415,
            total_withdraw: 350,
            balance: 45,
            for_approve: 45.34,
            today_contribution: 5.78,
            image_url: 'https://media.licdn.com/dms/image/D5635AQExQkEPINGiKw/profile-framedphoto-shrink_200_200/0/1689965016077?e=1709398800&v=beta&t=zPvLCTrvM4qowRj5spvZElIaJvFvPR7TRYkyAucaNfA',
        },
        session_expiry: 0,
    },
    error: '',
    isFetching: false,
}

const login = (state = initialState.login, action) => {
    switch (action.type) {
        // case REQUEST_LOGIN:
        //     return {
        //         ...state,
        //         token: '',
        //         user_id: 0,
        //         userName: '',
        //         session_expiry: 0,
        //     }
        // case SUCCESS_LOGIN:
        //     return {
        //         ...state,
        //         token: action.payload.token,
        //         user_id: action.payload.id,
        //         userName: action.payload.user_name,
        //         profile: action.payload.profile,
        //         session_expiry: action.payload.session_expiry,
        //     }
        // case SUCCESS_FETCH_ID:
        //     return {
        //         ...state,
        //         user_id: action.payload,
        //     }
        // case SUCCESS_FETCH_PROFILE:
        //     return {
        //         ...state,
        //         profile: action.payload,
        //     }
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
        // case SUCCESS_LOGOUT:
        //     return {
        //         ...state,
        //         token: "",
        //         user_id: '',
        //         userName: '',
        //         profile: {},
        //         session_expiry: 0,
        //     }
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
        // case REQUEST_LOGIN:
        // case REQUEST_LOGOUT:
        // case REQUEST_FETCH_ID:
        // case REQUEST_FETCH_PROFILE:
        case REQUEST_UPDATE_PROFILE:
            return true;
        // case SUCCESS_LOGIN:
        // case SUCCESS_LOGOUT:
        // case SUCCESS_FETCH_ID:
        // case SUCCESS_FETCH_PROFILE:
        // case FAILURE_LOGIN:
        // case FAILURE_LOGOUT:
        // case FAILURE_FETCH_ID:
        // case FAILURE_FETCH_PROFILE:
        case SUCCESS_UPDATE_PROFILE:
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
// export const selectUserID = state => state.login.user_id || '';
// export const selectExpiryTime = state => state.login.session_expiry;

// export const selectProfile = state => (state.login.profile && {
//     ...state.login.profile,
//     address: Array.isArray(state.login.profile.address) ? state.login.profile.address.join(', ') : ''
// }) || {};

export const selectToken = state => state.login.token || '';
export const selectIsLoggedIn = state => (state.login.token !== '' && state.login.user_id !== '') ? true : false;
export const selectIsAdmin = state => (state.login.user_type === 'admin') ? true : false;
console.log(selectIsAdmin);
export const selectProfile = state => state.login.profile;