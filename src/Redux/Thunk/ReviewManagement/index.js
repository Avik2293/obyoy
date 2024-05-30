import axios from "axios";
import {
    requestReviewingLine,
    reviewingLineSuccess,
    reviewingLineFailure,
    requestLineReviewAction,
    lineReviewActionSuccess,
    lineReviewActionFailure,
} from "../../ActionCreator/reviewManagement";
import { lineReviewAction_url, reviewingLine_url } from "../../../allApiPath";


export const reviewingLine = (token) => async (dispatch, getState) => {
    dispatch(requestReviewingLine())

    axios.get(reviewingLine_url, {
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

export const lineReviewAction = (parallelsentence_id, reviewers, status, times_reviewed, finalTranslateInput, token) => async (dispatch, getState) => {
    dispatch(requestLineReviewAction())

    // Dynamically build the payload object
    const payload = {
        parallelsentence_id: parallelsentence_id,
        status: status,
        times_reviewed: times_reviewed,
    };
    if (finalTranslateInput) {
        payload.reviewers = reviewers;
        payload.reviewed_lines = finalTranslateInput;
    }
    console.log(payload);

    axios.post(lineReviewAction_url, payload, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(lineReviewActionSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(lineReviewActionFailure(error))
        })
}
