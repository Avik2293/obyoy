import { combineReducers } from "redux";

import {
    REQUEST_FETCH_DATASETS,
    SUCCESS_FETCH_DATASETS,
    FAILURE_FETCH_DATASETS,
    REQUEST_CREATE_DATASET,
    SUCCESS_CREATE_DATASET,
    FAILURE_CREATE_DATASET,
    REQUEST_FILE_INPUT,
    SUCCESS_FILE_INPUT,
    FAILURE_FILE_INPUT,
    REQUEST_LINE_INPUT,
    SUCCESS_LINE_INPUT,
    FAILURE_LINE_INPUT,
} from "../Constant/custom";

const initialState = {
    customDatasets: [
        // {
        //     dataset_id: 0,
        //     dataset_name: '',
        //     user_id: 0,
        //     userName: '',
        //     total_lines: 0,
        //     create_date: '',
        //     approval_status: '',
        //     approval_date: '',
        //     all_lines: [],
        // },
    ],
    error: '',
    isFetching: false,
}

const customDatasets = (state = initialState.customDatasets, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATASETS:
            return {
                ...state,
                customDatasets: [],
                error: '',
            }
        case SUCCESS_FETCH_DATASETS:
            return {
                ...state,
                customDatasets: action.payload,
                error: '',
            }
        case FAILURE_FETCH_DATASETS:
            return {
                ...state,
                customDatasets: [],
                error: action.payload,
            }

        case REQUEST_CREATE_DATASET:
            return {
                ...state,
                // customDatasets: [],
                error: '',
            }
        case SUCCESS_CREATE_DATASET:
            return {
                ...state,
                customDatasets: action.payload,
                error: '',
            }
        case FAILURE_CREATE_DATASET:
            return {
                ...state,
                // customDatasets: [],
                error: action.payload,
            }

        case REQUEST_FILE_INPUT:
            return {
                ...state,
                // customDatasets: [],
                error: '',
            }
        case SUCCESS_FILE_INPUT:
            return {
                ...state,
                customDatasets: action.payload,
                error: '',
            }
        case FAILURE_FILE_INPUT:
            return {
                ...state,
                // customDatasets: [],
                error: action.payload,
            }

        case REQUEST_LINE_INPUT:
            return {
                ...state,
                // customDatasets: [],
                error: '',
            }
        case SUCCESS_LINE_INPUT:
            return {
                ...state,
                // customDatasets: action.payload,
                error: '',
            }
        case FAILURE_LINE_INPUT:
            return {
                ...state,
                // customDatasets: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_FETCH_DATASETS:
        case REQUEST_CREATE_DATASET:
        case REQUEST_FILE_INPUT:
        case REQUEST_LINE_INPUT:
            return true;

        case SUCCESS_FETCH_DATASETS:
        case SUCCESS_CREATE_DATASET:
        case SUCCESS_FILE_INPUT:
        case SUCCESS_LINE_INPUT:
        case FAILURE_FETCH_DATASETS:
        case FAILURE_CREATE_DATASET:
        case FAILURE_FILE_INPUT:
        case FAILURE_LINE_INPUT:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    customDatasets,
    isFetching,
});



export const selectCustomDatasets = state => state.customDatasets.customDatasets || '';
// export const selectIsLoggedIn = state => (state.login.token !== '' && state.login.user_id !== '') ? true : false;
// export const selectIsAdmin = state => (state.login.user_type === 'admin') ? true : false;
// console.log(selectIsAdmin);
// export const selectProfile = state => state.login.profile;