import {
    REQUEST_FETCH_WITHDRAWS,
    SUCCESS_FETCH_WITHDRAWS,
    FAILURE_FETCH_WITHDRAWS,
    REQUEST_WITHDRAW_REQUEST,
    SUCCESS_WITHDRAW_REQUEST,
    FAILURE_WITHDRAW_REQUEST,
} from "../Constant/withdraw";


export const requestFetchWithdraws = () => ({
    type: REQUEST_FETCH_WITHDRAWS,
})
export const fetchWithdrawsSuccess = (data) => ({
    type: SUCCESS_FETCH_WITHDRAWS,
    payload: data,
})
export const fetchWithdrawsFailure = (error) => ({
    type: FAILURE_FETCH_WITHDRAWS,
    payload: error,
})

export const requestWithdrawRequest = () => ({
    type: REQUEST_WITHDRAW_REQUEST,
})
export const withdrawRequestSuccess = (data) => ({
    type: SUCCESS_WITHDRAW_REQUEST,
    payload: data,
})
export const withdrawRequestFailure = (error) => ({
    type: FAILURE_WITHDRAW_REQUEST,
    payload: error,
})
