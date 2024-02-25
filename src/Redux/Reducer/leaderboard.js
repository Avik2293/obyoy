import { combineReducers } from "redux";
import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
} from "../Constant/home";

const initialState = {
    leaderboard: {
        topTen: {},
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
            return true;

        case SUCCESS_FETCH_LEADERBOARD:
        case FAILURE_FETCH_LEADERBOARD:
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