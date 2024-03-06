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

// import { BASE_URL } from "../../Constant/home";

export const leaderboard = () => async (dispatch, getState) => {
    dispatch(requestLeaderboard())

    axios.get("/api/v1/leaderboard/topTen")
        .then((response) => {
            dispatch(leaderboardSuccess(response.data));
        }, error => {
            dispatch(leaderboardFailure(error))
        })
}

export const newLine = () => async (dispatch, getState) => {
    dispatch(requestFetchNewline())

    axios.get("/api/v1/new_line")
        .then((response) => {
            dispatch(fetchNewlineSuccess(response.data));
        }, error => {
            dispatch(fetchNewlineFailure(error))
        })
}

export const translatedLine = (dataset_id, line_id, line, input, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    axios.post("/api/v1/translated_line", {
        dataset_id: dataset_id,
        line_id: line_id,
        line: line,
        translated_line: input,
        translator_id: translator_id,
    }, {
        headers: {
            'Authorization' : token,
        },
    })
        .then((response) => {
            dispatch(submitTranslatedlineSuccess(response.data));
        }, error => {
            dispatch(submitTranslatedlineFailure(error))
        })
}