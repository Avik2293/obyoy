import { combineReducers } from "redux";

import {
    REQUEST_FETCH_CUSTOM_DATASETS,
    SUCCESS_FETCH_CUSTOM_DATASETS,
    FAILURE_FETCH_CUSTOM_DATASETS,
    REQUEST_APPROVE_CUSTOM_DATASET,
    SUCCESS_APPROVE_CUSTOM_DATASET,
    FAILURE_APPROVE_CUSTOM_DATASET,
    REQUEST_DOWNLOAD_CUSTOM_DATASET,
    SUCCESS_DOWNLOAD_CUSTOM_DATASET,
    FAILURE_DOWNLOAD_CUSTOM_DATASET,
} from "../Constant/customDatasetManagement";

const initialState = {
    allCustomDataset: [],
    error: '',
    isFetching: false,
}

const customDatasetsData = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_FETCH_CUSTOM_DATASETS:
            return {
                ...state,
                allCustomDataset: [],
                error: '',
            }
        case SUCCESS_FETCH_CUSTOM_DATASETS:
            return {
                ...state,
                allCustomDataset: action.payload,
                error: '',
            }
        case FAILURE_FETCH_CUSTOM_DATASETS:
            return {
                ...state,
                allCustomDataset: [],
                error: action.payload,
            }

        case REQUEST_APPROVE_CUSTOM_DATASET:
            return {
                ...state,
                // allCustomDataset: [],
                error: '',
            }
        case SUCCESS_APPROVE_CUSTOM_DATASET:
            return {
                ...state,
                allCustomDataset: action.payload,
                error: '',
            }
        case FAILURE_APPROVE_CUSTOM_DATASET:
            return {
                ...state,
                // allCustomDataset: [],
                error: action.payload,
            }

        case REQUEST_DOWNLOAD_CUSTOM_DATASET:
            return {
                ...state,
                // allCustomDataset: [],
                error: '',
            }
        case SUCCESS_DOWNLOAD_CUSTOM_DATASET:
            return {
                ...state,
                allCustomDataset: action.payload,
                error: '',
            }
        case FAILURE_DOWNLOAD_CUSTOM_DATASET:
            return {
                ...state,
                // allCustomDataset: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_FETCH_CUSTOM_DATASETS:
        case REQUEST_APPROVE_CUSTOM_DATASET:
        case REQUEST_DOWNLOAD_CUSTOM_DATASET:
            return true;

        case SUCCESS_FETCH_CUSTOM_DATASETS:
        case SUCCESS_APPROVE_CUSTOM_DATASET:
        case SUCCESS_DOWNLOAD_CUSTOM_DATASET:
        case FAILURE_FETCH_CUSTOM_DATASETS:
        case FAILURE_APPROVE_CUSTOM_DATASET:
        case FAILURE_DOWNLOAD_CUSTOM_DATASET:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    customDatasetsData,
    isFetching,
});


export const selectAllCustomDatasetsData = state => state.allCustomDataset;
