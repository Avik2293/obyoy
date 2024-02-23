import { combineReducers } from "redux";
import {
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,
} from "../Constant/home";

const initialState = {
    lines: {
        newLine: "What you want to know ?",
        translatedLine: '',
    },
    isFetching: false,
}

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
    lines,
    isFetching,
});

