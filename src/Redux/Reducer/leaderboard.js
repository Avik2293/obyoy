import { combineReducers } from "redux";
import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    REQUEST_FULL_LEADERBOARD,
    SUCCESS_FULL_LEADERBOARD,
    FAILURE_FULL_LEADERBOARD,
} from "../Constant/home";

const initialState = {
    leaderboard: {
        topTen: {},
        fullLeaderboard: [],
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
                error: '',
            }
        case SUCCESS_FETCH_LEADERBOARD:
            return {
                ...state,
                topTen: action.payload,
                error: '',
            }
        case FAILURE_FETCH_LEADERBOARD:
            return {
                ...state,
                topTen: {},
                error: action.payload,
            }

        case REQUEST_FULL_LEADERBOARD:
            return {
                ...state,
                fullLeaderboard: [],
                error: '',
            }
        case SUCCESS_FULL_LEADERBOARD:
            return {
                ...state,
                fullLeaderboard: action.payload,
                error: '',
            }
        case FAILURE_FULL_LEADERBOARD:
            return {
                ...state,
                fullLeaderboard: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_FETCH_LEADERBOARD:
        case REQUEST_FULL_LEADERBOARD:
            return true;

        case SUCCESS_FETCH_LEADERBOARD:
        case SUCCESS_FULL_LEADERBOARD:
        case FAILURE_FETCH_LEADERBOARD:
        case FAILURE_FULL_LEADERBOARD:
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
export const selectFullLeaderboard = state => state.topTen.fullLeaderboard;