import { combineReducers } from "redux";

import {
    REQUEST_FETCH_WITHDRAWS,
    SUCCESS_FETCH_WITHDRAWS,
    FAILURE_FETCH_WITHDRAWS,
    REQUEST_WITHDRAW_REQUEST,
    SUCCESS_WITHDRAW_REQUEST,
    FAILURE_WITHDRAW_REQUEST,
} from "../Constant/withdraw";

const initialState = {
    withdraws: [

    ],
    error: '',
    isFetching: false,
}

const withdraws = (state = initialState.withdraws, action) => {
    switch (action.type) {
        case REQUEST_FETCH_WITHDRAWS:
            return {
                ...state,
                withdraws: [],
                error: '',
            }
        case SUCCESS_FETCH_WITHDRAWS:
            return {
                ...state,
                withdraws: action.payload,
                error: '',
            }
        case FAILURE_FETCH_WITHDRAWS:
            return {
                ...state,
                withdraws: [],
                error: action.payload,
            }

        case REQUEST_WITHDRAW_REQUEST:
            return {
                ...state,
                // customDatasets: [],
                error: '',
            }
        case SUCCESS_WITHDRAW_REQUEST:
            return {
                ...state,
                customDatasets: action.payload,
                error: '',
            }
        case FAILURE_WITHDRAW_REQUEST:
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
        case REQUEST_FETCH_WITHDRAWS:
        case REQUEST_WITHDRAW_REQUEST:
            return true;

        case SUCCESS_FETCH_WITHDRAWS:
        case SUCCESS_WITHDRAW_REQUEST:
        case FAILURE_FETCH_WITHDRAWS:
        case FAILURE_WITHDRAW_REQUEST:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    withdraws,
    isFetching,
});

export const selectWithdraws = state => state.withdraws.withdraws || '';
