import { combineReducers } from "redux";

import {
    REQUEST_ALL_DATASET,
    SUCCESS_ALL_DATASET,
    FAILURE_ALL_DATASET,
    REQUEST_UPLOAD_DATASET,
    SUCCESS_UPLOAD_DATASET,
    FAILURE_UPLOAD_DATASET,
    REQUEST_DATASET_DELETE,
    SUCCESS_DATASET_DELETE,
    FAILURE_DATASET_DELETE,
} from "../Constant/datasetManagement";

const initialState = {
    allDataset: [],
    error: '',
    isFetching: false,
}

const datasetsData = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ALL_DATASET:
            return {
                ...state,
                allDataset: [],
                error: '',
            }
        case SUCCESS_ALL_DATASET:
            return {
                ...state,
                allDataset: action.payload,
                error: '',
            }
        case FAILURE_ALL_DATASET:
            return {
                ...state,
                allDataset: [],
                error: action.payload,
            }

        case REQUEST_UPLOAD_DATASET:
            return {
                ...state,
                // allDataset: [],
                error: '',
            }
        case SUCCESS_UPLOAD_DATASET:
            return {
                ...state,
                allDataset: action.payload,
                error: '',
            }
        case FAILURE_UPLOAD_DATASET:
            return {
                ...state,
                // allDataset: [],
                error: action.payload,
            }

        case REQUEST_DATASET_DELETE:
            return {
                ...state,
                // allDataset: [],
                error: '',
            }
        case SUCCESS_DATASET_DELETE:
            return {
                ...state,
                allDataset: action.payload,
                error: '',
            }
        case FAILURE_DATASET_DELETE:
            return {
                ...state,
                // allDataset: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_ALL_DATASET:
        case REQUEST_UPLOAD_DATASET:
        case REQUEST_DATASET_DELETE:
            return true;

        case SUCCESS_ALL_DATASET:
        case SUCCESS_UPLOAD_DATASET:
        case SUCCESS_DATASET_DELETE:
        case FAILURE_ALL_DATASET:
        case FAILURE_UPLOAD_DATASET:
        case FAILURE_DATASET_DELETE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    datasetsData,
    isFetching,
});


export const selectAllDatasetsData = state => state.allDataset;
