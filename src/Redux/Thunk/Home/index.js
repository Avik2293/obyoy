import axios from "axios";
import {
    requestLeaderboard,
    leaderboardSuccess,
    leaderboardFailure,
    requestFullLeaderboard,
    fullLeaderboardSuccess,
    fullLeaderboardFailure,
    requestFetchNewline,
    fetchNewlineSuccess,
    fetchNewlineFailure,
    requestSubmitTranslatedline,
    submitTranslatedlineSuccess,
    submitTranslatedlineFailure,
    // updateSessionExpiry,
} from "../../ActionCreator/home";
import { fullLeaderboard_url, leaderboard_url, newLine_url, translatedLine_url } from "../../../allApiPath";


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

// export const translatedLine = (dataset_id, line_id, line, input, translator_id, token) => async (dispatch, getState) => {
export const translatedLine = (line, input, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    axios.post(translatedLine_url, {
        // dataset_id: dataset_id,
        // line_id: line_id,
        translator_id: translator_id,
        source_sentence: line,
        source_language: 'English',
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