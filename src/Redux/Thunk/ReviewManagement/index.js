import axios from "axios";
import {
    requestReviewingLine,
    reviewingLineSuccess,
    reviewingLineFailure,
    requestApproveLine,
    approveLineSuccess,
    approveLineFailure,
    requestRejectLine,
    rejectLineSuccess,
    rejectLineFailure,
} from "../../ActionCreator/reviewManagement";

// import { BASE_URL } from "../../Constant/login";

export const reviewingLine = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestReviewingLine())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/reviewing_line", {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(reviewingLineSuccess(response.data));
        }, error => {
            dispatch(reviewingLineFailure(error))
        })
}

export const approveLine = (user_id, dataset_id, line_id, line, translated_line, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestApproveLine())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/approving_line", {
        user_id: user_id,
        dataset_id: dataset_id,
        line_id: line_id,
        line: line,
        translated_line: translated_line,
        translator_id: translator_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(approveLineSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(approveLineFailure(error))
        })
}

export const rejectLine = (user_id, dataset_id, line_id, line, translated_line, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestRejectLine())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/rejecting_line", {
        user_id: user_id,
        dataset_id: dataset_id,
        line_id: line_id,
        line: line,
        translated_line: translated_line,
        translator_id: translator_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(rejectLineSuccess(response.data));
        }, error => {
            dispatch(rejectLineFailure(error))
        })
}
