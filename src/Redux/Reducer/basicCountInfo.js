import { combineReducers } from "redux";
import {
    REQUEST_FETCH_DATASET_COUNT,
    SUCCESS_FETCH_DATASET_COUNT,
    FAILURE_FETCH_DATASET_COUNT,
    REQUEST_FETCH_TRANSLATION_COUNT,
    SUCCESS_FETCH_TRANSLATION_COUNT,
    FAILURE_FETCH_TRANSLATION_COUNT,
    REQUEST_FETCH_REVIEWED_COUNT,
    SUCCESS_FETCH_REVIEWED_COUNT,
    FAILURE_FETCH_REVIEWED_COUNT,
    REQUEST_FETCH_CUSTOM_DATASET_COUNT,
    SUCCESS_FETCH_CUSTOM_DATASET_COUNT,
    FAILURE_FETCH_CUSTOM_DATASET_COUNT,
} from "../Constant/home";

const initialState = {
    basicCountInfo: {
        datasetCount: 0,
        translationCount: 0,
        reviewedCount: 0,
        customDatasetCount: 0,
        error: '',
    },
    isFetching: false,
}

const basicCountInfo = (state = initialState.basicCountInfo, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATASET_COUNT:
            return {
                ...state,
                datasetCount: 0,
                error: '',
            }
        case SUCCESS_FETCH_DATASET_COUNT:
            return {
                ...state,
                datasetCount: action.payload.dataset_count,
            }
        case FAILURE_FETCH_DATASET_COUNT:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_FETCH_TRANSLATION_COUNT:
            return {
                ...state,
                translationCount: 0,
                error: '',
            }
        case SUCCESS_FETCH_TRANSLATION_COUNT:
            return {
                ...state,
                translationCount: action.payload.translation_count,
            }
        case FAILURE_FETCH_TRANSLATION_COUNT:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_FETCH_REVIEWED_COUNT:
            return {
                ...state,
                reviewedCount: 0,
                error: '',
            }
        case SUCCESS_FETCH_REVIEWED_COUNT:
            return {
                ...state,
                reviewedCount: action.payload.parallelsentence_count,
            }
        case FAILURE_FETCH_REVIEWED_COUNT:
            return {
                ...state,
                error: action.payload,
            }

        case REQUEST_FETCH_CUSTOM_DATASET_COUNT:
            return {
                ...state,
                customDatasetCount: 0,
                error: '',
            }
        case SUCCESS_FETCH_CUSTOM_DATASET_COUNT:
            return {
                ...state,
                customDatasetCount: action.payload.datastream_count,
            }
        case FAILURE_FETCH_CUSTOM_DATASET_COUNT:
            return {
                ...state,
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATASET_COUNT:
        case REQUEST_FETCH_TRANSLATION_COUNT:
        case REQUEST_FETCH_REVIEWED_COUNT:
        case REQUEST_FETCH_CUSTOM_DATASET_COUNT:
            return true;

        case SUCCESS_FETCH_DATASET_COUNT:
        case SUCCESS_FETCH_TRANSLATION_COUNT:
        case SUCCESS_FETCH_REVIEWED_COUNT:
        case SUCCESS_FETCH_CUSTOM_DATASET_COUNT:
        case FAILURE_FETCH_DATASET_COUNT:
        case FAILURE_FETCH_TRANSLATION_COUNT:
        case FAILURE_FETCH_REVIEWED_COUNT:
        case FAILURE_FETCH_CUSTOM_DATASET_COUNT:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    basicCountInfo,
    isFetching,
});

export const selectBasicCountInfo = state => state.basicCountInfo;