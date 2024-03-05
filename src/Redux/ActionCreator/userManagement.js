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


export const requestAllUsersData = () => ({
    type : REQUEST_ALL_USERS_DATA,
})
export const allUsersDataSuccess = (data) => ({
    type: SUCCESS_ALL_USERS_DATA,
    payload: data,
})
export const allUsersDataFailure = (error) => ({
    type : FAILURE_ALL_USERS_DATA,
    payload: error,
})

export const requestUserData = () => ({
    type : REQUEST_USER_DATA,
})
export const userDataSuccess = (data) => ({
    type: SUCCESS_USER_DATA,
    payload: data,
})
export const userDataFailure = (error) => ({
    type : FAILURE_USER_DATA,
    payload: error,
})

export const requestUserWithdrawData = () => ({
    type : REQUEST_USER_WITHDRAW_DATA,
})
export const userWithdrawDataSuccess = (data) => ({
    type: SUCCESS_USER_WITHDRAW_DATA,
    payload: data,
})
export const userWithdrawDataFailure = (error) => ({
    type : FAILURE_USER_WITHDRAW_DATA,
    payload: error,
})

export const requestUserDelete = () => ({
    type: REQUEST_USER_DELETE,
    // payload: token,
})
export const userDeleteSuccess = (data) => ({
    type: SUCCESS_USER_DELETE,
    payload: data,
})
export const userDeleteFailure = (error) => ({
    type: FAILURE_USER_DELETE,
    payload: error,
})
