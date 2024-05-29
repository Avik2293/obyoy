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

export const lineReviewAction = (user_id, dataset_id, line_id, line, translated_line, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestLineReviewAction())

    axios.post(lineReviewAction_url, {
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
            dispatch(lineReviewActionSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(lineReviewActionFailure(error))
        })
}
