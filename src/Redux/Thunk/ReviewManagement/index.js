import axios from "axios";
import {
    requestReviewingLine,
    reviewingLineSuccess,
    reviewingLineFailure,
    requestLineReviewAction,
    lineReviewActionSuccess,
    lineReviewActionFailure,
    requestFinalTranslation,
    finalTranslationSuccess,
    finalTranslationFailure,
} from "../../ActionCreator/reviewManagement";
import { finalTranslation_url, lineReviewAction_url, reviewingLine_url } from "../../../allApiPath";


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
        payload.reviewers = [reviewers];
        payload.reviewed_lines = [finalTranslateInput];
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

export const finalTranslation = (source_sentence, source_language, destination_sentence, destination_language, dataset_id, name, datastream_id, line_number, translator_id, reviewer_id, token) => async (dispatch, getState) => {
    dispatch(requestFinalTranslation())
    console.log(destination_sentence);

    axios.post(finalTranslation_url, {
        source_sentence: source_sentence,
        source_language: source_language,
        destination_sentence: destination_sentence,
        destination_language: destination_language,
        dataset_id: dataset_id,
        name: name,
        datastream_id: datastream_id,
        line_number: line_number,
        translator_id: translator_id,
        reviewer_id: reviewer_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(finalTranslationSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(finalTranslationFailure(error))
        })
}
