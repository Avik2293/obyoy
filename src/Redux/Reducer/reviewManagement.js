import { combineReducers } from "redux";

import {
    REQUEST_REVIEWING_LINE,
    SUCCESS_REVIEWING_LINE,
    FAILURE_REVIEWING_LINE,
    REQUEST_APPROVE_LINE,
    SUCCESS_APPROVE_LINE,
    FAILURE_APPROVE_LINE,
    REQUEST_REJECT_LINE,
    SUCCESS_REJECT_LINE,
    FAILURE_REJECT_LINE,
} from "../Constant/reviewManagement";

const initialState = {
    reviewedLine: {
        dataset_id: 0,
        dataset_name: '',
        line_id: 0,
        line: "",
        translated_line: '',
        translator_id: 0,
        error: "",
    },
    error: '',
    isFetching: false,
}

const reviewedLineData = (state = initialState.reviewedLine, action) => {
    switch (action.type) {
        case REQUEST_REVIEWING_LINE:
            return {
                ...state,
                dataset_id: 0,
                dataset_name: '',
                line_id: 0,
                line: "",
                translated_line: '',
                translator_id: 0,
                error: '',
            }
        case SUCCESS_REVIEWING_LINE:
            return {
                ...state,
                dataset_id: action.payload.dataset_id,
                dataset_name: action.payload.dataset_name,
                line_id: action.payload.reviewing_lines[0].line_id,
                line: action.payload.reviewing_lines[0].line,
                translated_line: action.payload.reviewing_lines[0].translated_line,
                translator_id: action.payload.reviewing_lines[0].translator_id,
                error: "",
            }
        case FAILURE_REVIEWING_LINE:
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

        case REQUEST_APPROVE_LINE:
            return {
                ...state,
                // reviewedLine: [],
                error: '',
            }
        case SUCCESS_APPROVE_LINE:
            return {
                ...state,
                // dataset_id: 0,
                // dataset_name: '',
                // line_id: 0,
                // line: "",
                // translated_line: '',
                // translator_id: 0,
                error: '',
            }
        case FAILURE_APPROVE_LINE:
            return {
                ...state,
                // reviewedLine: [],
                error: action.payload,
            }

        case REQUEST_REJECT_LINE:
            return {
                ...state,
                // reviewedLine: [],
                error: '',
            }
        case SUCCESS_REJECT_LINE:
            return {
                ...state,
                // reviewedLine: action.payload,
                error: '',
            }
        case FAILURE_REJECT_LINE:
            return {
                ...state,
                // reviewedLine: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_REVIEWING_LINE:
        case REQUEST_APPROVE_LINE:
        case REQUEST_REJECT_LINE:
            return true;

        case SUCCESS_REVIEWING_LINE:
        case SUCCESS_APPROVE_LINE:
        case SUCCESS_REJECT_LINE:
        case FAILURE_REVIEWING_LINE:
        case FAILURE_APPROVE_LINE:
        case FAILURE_REJECT_LINE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    reviewedLineData,
    isFetching,
});


export const selectReviewedLineData = state => state.reviewedLineData;
