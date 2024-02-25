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
        error: "",
    },
    isFetching: false,
}

const lines = (state = initialState.lines, action) => {
    switch (action.type) {
        case REQUEST_FETCH_NEWLINE:
            return {
                ...state,
                newLine: '',
                error: '',
            }
        case SUCCESS_FETCH_NEWLINE:
            return {
                ...state,
                newLine: action.payload,
                error: '',
            }
        case FAILURE_FETCH_NEWLINE:
            return {
                ...state,
                newLine: "",
                error: action.payload,
            }

        case REQUEST_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                translatedLine: '',
                error: '',
            }
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                translatedLine: action.payload,
                error: '',
            }
        case FAILURE_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
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

        case SUCCESS_FETCH_NEWLINE:
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
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

export const selectLine = state => state.lines;
// export const selectNewLine = state => state.lines;
// export const selectTranslatedLine = state => state.lines;
