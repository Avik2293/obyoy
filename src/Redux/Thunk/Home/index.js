import axios from "axios";
import {
    requestLeaderboard,
    leaderboardSuccess,
    leaderboardFailure,
    // requestFetchProfile,
    // fetchProfileSuccess,
    // fetchProfileFailure,
    requestFetchNewline,
    fetchNewlineSuccess,
    fetchNewlineFailure,
    requestSubmitTranslatedline,
    submitTranslatedlineSuccess,
    submitTranslatedlineFailure,
    // updateSessionExpiry,
} from "../../ActionCreator/home";

import { BASE_URL } from "../../Constant/home";

export const leaderboard = () => async (dispatch, getState) => {
    dispatch(requestLeaderboard())

    // axios.get(BASE_URL + "/api/v1/leaderboard")
    axios.get("/api/v1/leaderboard/topTen")
        .then((response) => {
            // console.log(response.data);
            dispatch(leaderboardSuccess(response.data));
        }, error => {
            dispatch(leaderboardFailure(error))
        })
}

export const newLine = () => async (dispatch, getState) => {
    dispatch(requestFetchNewline())

    // axios.get(BASE_URL + "/api/v1/lines/newLine")
    axios.get("/api/v1/new_line")
        .then((response) => {
            // console.log(response.data);
            dispatch(fetchNewlineSuccess(response.data));
        }, error => {
            dispatch(fetchNewlineFailure(error))
        })
}

export const translatedLine = (dataset_id, line_id, line, input, translator_id) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    // axios.post(BASE_URL + "/api/v1/translated_line", {
    axios.post("/api/v1/translated_line", {
        dataset_id: dataset_id,
        line_id: line_id,
        line: line,
        translated_line: input,
        translator_id: translator_id,
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(submitTranslatedlineSuccess(response.data));
        }, error => {
            dispatch(submitTranslatedlineFailure(error))
        })
}