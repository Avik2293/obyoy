import { combineReducers } from "redux";
import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,
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
                topTen: {},
            }
        case SUCCESS_FETCH_LEADERBOARD:
            return {
                ...state,
                topTen: action.payload,
            }
        case FAILURE_FETCH_LEADERBOARD:
            return {
                ...state,
                topTen: {},
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
    isFetching,
});

export const selectLeaderboard = state => state.topTen.topTen;
export const selectNewLine = state => state.lines;
export const selectTranslatedLine = state => state.lines;