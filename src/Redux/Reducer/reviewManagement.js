import { combineReducers } from "redux";

import {
    REQUEST_REVIEWING_LINE,
    SUCCESS_REVIEWING_LINE,
    FAILURE_REVIEWING_LINE,
    REQUEST_LINE_REVIEW_ACTION,
    SUCCESS_LINE_REVIEW_ACTION,
    FAILURE_LINE_REVIEW_ACTION,
} from "../Constant/reviewManagement";

const initialState = {
    reviewedLine: {
        dataset_id: 0,
        datastream_id: 0,
        parallelsentence_id: 0,
        dataset_name: '',
        times_reviewed: 0,
        line_number: 0,
        line: '',
        source_language: '',
        translated_line: '',
        destination_language: '',
        translator_id: 0,
        reviewed_lines: '',
        success: '',
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
                datastream_id: 0,
                parallelsentence_id: 0,
                dataset_name: '',
                times_reviewed: 0,
                line_number: 0,
                line: '',
                source_language: '',
                translated_line: '',
                destination_language: '',
                translator_id: 0,
                reviewed_lines: '',
                success: '',
                error: '',
            }
        case SUCCESS_REVIEWING_LINE:
            return {
                ...state,
                dataset_id: action.payload.dataset_id,
                datastream_id: action.payload.datastream_id,
                parallelsentence_id: action.payload.ID,
                dataset_name: action.payload.name,
                times_reviewed: action.payload.times_reviewed,
                line_number: action.payload.line_number,
                line: action.payload.source_sentence,
                source_language: action.payload.source_language,
                translated_line: action.payload.destination_sentence,
                destination_language: action.payload.destination_language,
                translator_id: action.payload.translator_id,
                reviewed_lines: action.payload.reviewed_lines,
                success: '',
                error: "",
            }
        case FAILURE_REVIEWING_LINE:
            return {
                ...state,
                success: '',
                error: action.payload,
            }

        case REQUEST_LINE_REVIEW_ACTION:
            return {
                ...state,
                success: '',
                error: '',
            }
        case SUCCESS_LINE_REVIEW_ACTION:
            return {
                ...state,
                success: action.payload.message,
                error: '',
            }
        case FAILURE_LINE_REVIEW_ACTION:
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
        case REQUEST_REVIEWING_LINE:
        case REQUEST_LINE_REVIEW_ACTION:
            return true;

        case SUCCESS_REVIEWING_LINE:
        case SUCCESS_LINE_REVIEW_ACTION:
        case FAILURE_REVIEWING_LINE:
        case FAILURE_LINE_REVIEW_ACTION:
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
