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
        name: '',
        dataset_id: 0,
        datastream_id: 0,
        line_number: 0,
        source_language: '',
        line: '',
        success: '',
        error: "",
    },
    isFetching: false,
}

const lines = (state = initialState.lines, action) => {
    switch (action.type) {
        case REQUEST_FETCH_NEWLINE:
            return {
                ...state,
                success: '',
                error: "",
            }
        case SUCCESS_FETCH_NEWLINE:
            return {
                ...state,
                name: action.payload.name,
                dataset_id: action.payload.dataset_id,
                datastream_id: action.payload.datastream_id,
                line_number: action.payload.line_number,
                source_language: action.payload.source_language,
                line: action.payload.source_sentence,
            }
        case FAILURE_FETCH_NEWLINE:
            return {
                ...state,
                success: '',
                error: action.payload,
            }

        case REQUEST_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                success: '',
                error: '',
            }
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                success: action.payload.message,
                error: '',
            }
        case FAILURE_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                success: '',
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
