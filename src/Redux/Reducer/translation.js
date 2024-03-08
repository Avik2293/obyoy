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
        dataset_id: 0,
        dataset_name: '',
        line_id: 0,
        line: "",
        translated_line: '',
        translator_id: 0,
        error: "",
    },
    isFetching: false,
}

const lines = (state = initialState.lines, action) => {
    switch (action.type) {
        case REQUEST_FETCH_NEWLINE:
            return {
                ...state,
                dataset_id: 0,
                dataset_name: '',
                line_id: 0,
                line: "",
                translated_line: '',
                translator_id: 0,
                error: "",
            }
        case SUCCESS_FETCH_NEWLINE:
            return {
                ...state,
                dataset_id: action.payload.dataset_id,
                dataset_name: action.payload.dataset_name,
                line_id: action.payload.remaining_lines[0].line_id,
                line: action.payload.remaining_lines[0].line,
                translated_line: '',
                translator_id: 0,
                error: "",
            }
        case FAILURE_FETCH_NEWLINE:
            return {
                ...state,
                dataset_id: 0,
                dataset_name: '',
                line_id: 0,
                line: "",
                translated_line: '',
                translator_id: 0,
                error: action.payload,
            }

        case REQUEST_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                // dataset_name: action.payload.dataset_name,
                // dataset_id: action.payload.dataset_id,
                // line_id: action.payload.line_id,
                // line: action.payload.line,
                // translated_line: action.payload.input,
                // translator_id: action.payload.translator_id,
                error: '',
            }
        case SUCCESS_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                error: '',
            }
        case FAILURE_SUBMIT_TRANSLATEDLINE:
            return {
                ...state,
                // dataset_id: 0,
                // dataset_name: '',
                // line_id: 0,
                // line: "",
                // translated_line: '',
                // translator_id: 0,
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
