import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,
} from "../Constant/home";

export const requestLeaderboard = () => ({
    type: REQUEST_FETCH_LEADERBOARD,
})
export const leaderboardSuccess = (data) => ({
    type: SUCCESS_FETCH_LEADERBOARD,
    payload: data.topTens[0],
})
export const leaderboardFailure = (error) => ({
    type: FAILURE_FETCH_LEADERBOARD,
    payload: error,
})

export const requestFetchNewline = () => ({
    type: REQUEST_FETCH_NEWLINE,
    // payload: user_id,
})
export const fetchNewlineSuccess = (data) => ({
    type: SUCCESS_FETCH_NEWLINE,
    payload: data,
})
export const fetchNewlineFailure = (error) => ({
    type: FAILURE_FETCH_NEWLINE,
    payload: error,
})

// export const requestSubmitTranslatedline = (dataset_id, line_id, line, input, translator_id) => ({
export const requestSubmitTranslatedline = () => ({
    type: REQUEST_SUBMIT_TRANSLATEDLINE,
})
export const submitTranslatedlineSuccess = (data) => ({
    type: SUCCESS_SUBMIT_TRANSLATEDLINE,
    payload: data,
})
export const submitTranslatedlineFailure = (error) => ({
    type: FAILURE_SUBMIT_TRANSLATEDLINE,
    payload: error,
})
