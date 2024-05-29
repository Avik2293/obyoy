import {
    REQUEST_REVIEWING_LINE,
    SUCCESS_REVIEWING_LINE,
    FAILURE_REVIEWING_LINE,
    REQUEST_LINE_REVIEW_ACTION,
    SUCCESS_LINE_REVIEW_ACTION,
    FAILURE_LINE_REVIEW_ACTION,
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

export const requestLineReviewAction = () => ({
    type: REQUEST_LINE_REVIEW_ACTION,
})
export const lineReviewActionSuccess = (data) => ({
    type: SUCCESS_LINE_REVIEW_ACTION,
    payload: data,
})
export const lineReviewActionFailure = (error) => ({
    type: FAILURE_LINE_REVIEW_ACTION,
    payload: error,
})
