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


export const requestReviewingLine = () => ({
    type: REQUEST_REVIEWING_LINE,
})
export const reviewingLineSuccess = (data) => ({
    type: SUCCESS_REVIEWING_LINE,
    payload: data,
})
export const reviewingLineFailure = (error) => ({
    type: FAILURE_REVIEWING_LINE,
    payload: error,
})

export const requestApproveLine = () => ({
    type: REQUEST_APPROVE_LINE,
})
export const approveLineSuccess = (data) => ({
    type: SUCCESS_APPROVE_LINE,
    payload: data,
})
export const approveLineFailure = (error) => ({
    type: FAILURE_APPROVE_LINE,
    payload: error,
})

export const requestRejectLine = () => ({
    type: REQUEST_REJECT_LINE,
    // payload: token,
})
export const rejectLineSuccess = (data) => ({
    type: SUCCESS_REJECT_LINE,
    payload: data,
})
export const rejectLineFailure = (error) => ({
    type: FAILURE_REJECT_LINE,
    payload: error,
})
