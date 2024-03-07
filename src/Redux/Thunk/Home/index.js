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

// import { BASE_URL } from "../../Constant/home";

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

export const fullLeaderboard = () => async (dispatch, getState) => {
    dispatch(requestFullLeaderboard())

    // axios.get(BASE_URL + "/api/v1/leaderboard")
    axios.get("/api/v1/leaderboard/full")
        .then((response) => {
            // console.log(response.data);
            dispatch(fullLeaderboardSuccess(response.data));
        }, error => {
            dispatch(fullLeaderboardFailure(error))
        })
}

export const newLine = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestFetchNewline())

    // axios.get(BASE_URL + "/api/v1/lines/newLine")
    axios.post("/api/v1/new_line", {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(fetchNewlineSuccess(response.data));
        }, error => {
            dispatch(fetchNewlineFailure(error))
        })
}

export const translatedLine = (dataset_id, line_id, line, input, translator_id, token) => async (dispatch, getState) => {
    dispatch(requestSubmitTranslatedline())

    // axios.post(BASE_URL + "/api/v1/translated_line", {
    axios.post("/api/v1/translated_line", {
        dataset_id: dataset_id,
        line_id: line_id,
        line: line,
        translated_line: input,
        translator_id: translator_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(submitTranslatedlineSuccess(response.data));
        }, error => {
            dispatch(submitTranslatedlineFailure(error))
        })
}