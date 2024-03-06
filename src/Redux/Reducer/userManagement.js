import { combineReducers } from "redux";

import {
    REQUEST_ALL_USERS_DATA,
    SUCCESS_ALL_USERS_DATA,
    FAILURE_ALL_USERS_DATA,
    REQUEST_USER_DATA,
    SUCCESS_USER_DATA,
    FAILURE_USER_DATA,
    REQUEST_USER_WITHDRAW_DATA,
    SUCCESS_USER_WITHDRAW_DATA,
    FAILURE_USER_WITHDRAW_DATA,
    REQUEST_USER_DELETE,
    SUCCESS_USER_DELETE,
    FAILURE_USER_DELETE,
} from "../Constant/userManagement";

const initialState = {
    allUser: [],
    userData: {},
    userWithdraws: [],
    error: '',
    isFetching: false,
}

const usersData = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_ALL_USERS_DATA:
            return {
                ...state,
                allUser: [],
                error: '',
            }
        case SUCCESS_ALL_USERS_DATA:
            return {
                ...state,
                allUser: action.payload,
                error: '',
            }
        case FAILURE_ALL_USERS_DATA:
            return {
                ...state,
                allUser: [],
                error: action.payload,
            }

        case REQUEST_USER_DATA:
            return {
                ...state,
                userData: {},
                error: '',
            }
        case SUCCESS_USER_DATA:
            return {
                ...state,
                userData: action.payload,
                error: '',
            }
        case FAILURE_USER_DATA:
            return {
                ...state,
                userData: {},
                error: action.payload,
            }

        case REQUEST_USER_WITHDRAW_DATA:
            return {
                ...state,
                userWithdraws: [],
                error: "",
            }
        case SUCCESS_USER_WITHDRAW_DATA:
            return {
                ...state,
                userWithdraws: action.payload,
                error: "",
            }
        case FAILURE_USER_WITHDRAW_DATA:
            return {
                ...state,
                userWithdraws: [],
                error: action.payload,
            }

        case REQUEST_USER_DELETE:
            return {
                ...state,
                // allUser: [],
                error: '',
            }
        case SUCCESS_USER_DELETE:
            return {
                ...state,
                allUser: action.payload,
                error: '',
            }
        case FAILURE_USER_DELETE:
            return {
                ...state,
                // allUser: [],
                error: action.payload,
            }

        default:
            return state;
    }
};

const isFetching = (state = initialState.isFetching, action) => {
    switch (action.type) {
        case REQUEST_ALL_USERS_DATA:
        case REQUEST_USER_DATA:
        case REQUEST_USER_WITHDRAW_DATA:
        case REQUEST_USER_DELETE:
            return true;

        case SUCCESS_ALL_USERS_DATA:
        case SUCCESS_USER_DATA:
        case SUCCESS_USER_WITHDRAW_DATA:
        case SUCCESS_USER_DELETE:
        case FAILURE_ALL_USERS_DATA:
        case FAILURE_USER_DATA:
        case FAILURE_USER_WITHDRAW_DATA:
        case FAILURE_USER_DELETE:
            return false;

        default:
            return state;
    }
};

export default combineReducers({
    usersData,
    isFetching,
});


export const selectAllUserData = state => state.allUser;
export const selectSingleUser = state => state.userData;
export const selectUserWithdraws = state => state.userWithdraws;
