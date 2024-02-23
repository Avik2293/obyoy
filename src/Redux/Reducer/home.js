import { combineReducers } from "redux";
import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    // REQUEST_FETCH_PROFILE,
    // SUCCESS_FETCH_PROFILE,
    // FAILURE_FETCH_PROFILE,
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,
    // REQUEST_LOGOUT,
    // SUCCESS_LOGOUT,
    // FAILURE_LOGOUT,
    // UPDATE_SESSION_EXPIRY,
} from "../Constant/home";

const initialState = {
    leaderboard: {
        topTen: {
            'fdgdr gdf': 5345,
            'fddr gdf': 545,
            'fdgr gdf': 345,
        },
    },
    lines: {
        newLine: "What you want to know ?",
        translatedLine: '',
    },
    error: '',
    isFetching: false,
}

const topTen = (state = initialState.leaderboard, action) => {
    switch (action.type) {
        case REQUEST_FETCH_LEADERBOARD:
            return {
                ...state,
                // isFetching: true,
                topTen: {},
                // error: '',
            }
        case SUCCESS_FETCH_LEADERBOARD:
            return {
                ...state,
                // isFetching: false,
                topTen: action.payload,
                // error: '',
            }
        case FAILURE_FETCH_LEADERBOARD:
            return {
                ...state,
                // isFetching: false,
                topTen: {},
                // error: action.payload,
            }
        default:
            return state;
    }
};

const lines = (state = initialState.lines, action) => {
    switch (action.type) {
        case REQUEST_FETCH_NEWLINE:
            return {
                ...state,
                isFetching: true,
                newLine: '',
                error: '',
            }
        case SUCCESS_FETCH_NEWLINE:
            return {
                ...state,
                isFetching: false,
                newLine: action.payload,
                error: '',
            }
        case FAILURE_FETCH_NEWLINE:
            return {
                ...state,
                newLine: "",
                isFetching: false,
                error: action.payload,
            }

        case REQUEST_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                isFetching: true,
                translatedLine: '',
                error: '',
            }
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                isFetching: false,
                translatedLine: action.payload,
                error: '',
            }
        case FAILURE_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                isFetching: false,
                translatedLine: "",
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_FETCH_LEADERBOARD:
        case REQUEST_FETCH_NEWLINE:
        case REQUEST_SUBMIT_TRANSLATEDLINE:
            return true;

        case SUCCESS_FETCH_LEADERBOARD:
        case SUCCESS_FETCH_NEWLINE:
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
        case FAILURE_FETCH_LEADERBOARD:
        case FAILURE_FETCH_NEWLINE:
        case FAILURE_SUBMIT_TRANSLATEDLINE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    topTen,
    lines,
    isFetching,
});

// export const selectLoginIsFetching = state => state.isFetching;
// export const selectToken = state => state.login.token || '';
// export const selectUserName = state => state.login.userName || '';
// export const selectUserID = state => state.login.user_id || '';
// export const selectExpiryTime = state => state.login.session_expiry;

// export const selectProfile = state => (state.login.profile && {
//     ...state.login.profile,
//     address: Array.isArray(state.login.profile.address) ? state.login.profile.address.join(', ') : ''
// }) || {};

// export const selectIsLoggedIn = state => (state.login.token !== '' && state.login.user_id !== '') ? true : false;


export const selectLeaderboard = state => state.topTen.topTen;
export const selectNewLine = state => state.lines;
export const selectTranslatedLine = state => state.lines;