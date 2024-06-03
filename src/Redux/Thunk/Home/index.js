import axios from "axios";
import {
    requestLeaderboard,
    leaderboardSuccess,
    leaderboardFailure,
    requestFullLeaderboard,
    fullLeaderboardSuccess,
    fullLeaderboardFailure,
    requestDatasetCount,
    datasetCountSuccess,
    datasetCountFailure,
    requestTranslationCount,
    translationCountSuccess,
    translationCountFailure,
    requestReviewedCount,
    reviewedCountSuccess,
    reviewedCountFailure,
    requestCustomDatasetCount,
    customDatasetCountSuccess,
    customDatasetCountFailure,
    requestFetchNewline,
    fetchNewlineSuccess,
    fetchNewlineFailure,
    requestSubmitTranslatedline,
    submitTranslatedlineSuccess,
    submitTranslatedlineFailure,
    // updateSessionExpiry,
} from "../../ActionCreator/home";
import { customDatasetCount_url, datasetCount_url, fullLeaderboard_url, leaderboard_url, newLine_url, reviewedCount_url, translatedLine_url, translationCount_url } from "../../../allApiPath";


export const leaderboard = () => async (dispatch, getState) => {
    dispatch(requestLeaderboard())

    axios.get(leaderboard_url)
        .then((response) => {
            dispatch(leaderboardSuccess(response.data));
        }, error => {
            dispatch(leaderboardFailure(error))
        })
}

export const fullLeaderboard = () => async (dispatch, getState) => {
    dispatch(requestFullLeaderboard())

    axios.get(fullLeaderboard_url)
        .then((response) => {
            // console.log(response.data);
            dispatch(fullLeaderboardSuccess(response.data));
        }, error => {
            dispatch(fullLeaderboardFailure(error))
        })
}

export const datasetCount = (token) => async (dispatch, getState) => {
    dispatch(requestDatasetCount())

    axios.get(datasetCount_url, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(datasetCountSuccess(response.data));
        }, error => {
            dispatch(datasetCountFailure(error))
        })
}

export const translationCount = (token) => async (dispatch, getState) => {
    dispatch(requestTranslationCount())

    axios.get(translationCount_url, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(translationCountSuccess(response.data));
        }, error => {
            dispatch(translationCountFailure(error))
        })
}

export const reviewedCount = (token) => async (dispatch, getState) => {
    dispatch(requestReviewedCount())

    axios.get(reviewedCount_url, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(reviewedCountSuccess(response.data));
        }, error => {
            dispatch(reviewedCountFailure(error))
        })
}

export const customDatasetCount = (token) => async (dispatch, getState) => {
    dispatch(requestCustomDatasetCount())

    axios.get(customDatasetCount_url, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(customDatasetCountSuccess(response.data));
        }, error => {
            dispatch(customDatasetCountFailure(error))
        })
}

export const newLine = (token) => async (dispatch, getState) => {
    dispatch(requestFetchNewline())

    axios.get(newLine_url, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(fetchNewlineSuccess(response.data));
        }, error => {
            dispatch(fetchNewlineFailure(error));
        })
}

export const translatedLine = (dataset_id, datastream_id, name, line_number, line, source_language, input, token) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    axios.post(translatedLine_url, {
        dataset_id: dataset_id,
        datastream_id: datastream_id,
        name: name,
        line_number: line_number,
        source_sentence: line,
        source_language: source_language,
        destination_sentence: input,
        destination_language: 'Bengali',
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(submitTranslatedlineSuccess(response.data));
        }, error => {
            dispatch(submitTranslatedlineFailure(error))
        })
}