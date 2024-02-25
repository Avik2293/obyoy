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

    axios.get(BASE_URL + "/api/v1/lines/newLine")
        .then((response) => {
            dispatch(fetchNewlineSuccess(response.data));
        }, error => {
            dispatch(fetchNewlineFailure(error))
        })
}

export const translatedLine = ({ line_id, input }) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    axios.post(BASE_URL + "/api/v1/lines/:line_id", {
        lineId: line_id,
        translatedLine: input,
    })
        .then((response) => {
            dispatch(submitTranslatedlineSuccess(response.data));
        }, error => {
            dispatch(submitTranslatedlineFailure(error))
        })
}