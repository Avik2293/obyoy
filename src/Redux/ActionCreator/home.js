import {
    REQUEST_FETCH_LEADERBOARD,
    SUCCESS_FETCH_LEADERBOARD,
    FAILURE_FETCH_LEADERBOARD,
    REQUEST_FULL_LEADERBOARD,
    SUCCESS_FULL_LEADERBOARD,
    FAILURE_FULL_LEADERBOARD,
    REQUEST_FETCH_DATASET_COUNT,
    SUCCESS_FETCH_DATASET_COUNT,
    FAILURE_FETCH_DATASET_COUNT,
    REQUEST_FETCH_TRANSLATION_COUNT,
    SUCCESS_FETCH_TRANSLATION_COUNT,
    FAILURE_FETCH_TRANSLATION_COUNT,
    REQUEST_FETCH_REVIEWED_COUNT,
    SUCCESS_FETCH_REVIEWED_COUNT,
    FAILURE_FETCH_REVIEWED_COUNT,
    REQUEST_FETCH_CUSTOM_DATASET_COUNT,
    SUCCESS_FETCH_CUSTOM_DATASET_COUNT,
    FAILURE_FETCH_CUSTOM_DATASET_COUNT,
    REQUEST_FETCH_NEWLINE,
    SUCCESS_FETCH_NEWLINE,
    FAILURE_FETCH_NEWLINE,
    REQUEST_SUBMIT_TRANSLATEDLINE,
    SUCCESS_SUBMIT_TRANSLATEDLINE,
    FAILURE_SUBMIT_TRANSLATEDLINE,

    // UPDATE_SESSION_EXPIRY,
} from "../Constant/home";

export const requestLeaderboard = () => ({
    type: REQUEST_FETCH_LEADERBOARD,
})
export const leaderboardSuccess = (data) => ({
    type: SUCCESS_FETCH_LEADERBOARD,
    // payload: data.topTens[0],
    payload: data,
})
export const leaderboardFailure = (error) => ({
    type: FAILURE_FETCH_LEADERBOARD,
    payload: error,
})

export const requestFullLeaderboard = () => ({
    type: REQUEST_FULL_LEADERBOARD,
})
export const fullLeaderboardSuccess = (data) => ({
    type: SUCCESS_FULL_LEADERBOARD,
    payload: data,
})
export const fullLeaderboardFailure = (error) => ({
    type: FAILURE_FULL_LEADERBOARD,
    payload: error,
})

export const requestDatasetCount = () => ({
    type: REQUEST_FETCH_DATASET_COUNT,
})
export const datasetCountSuccess = (data) => ({
    type: SUCCESS_FETCH_DATASET_COUNT,
    payload: data,
})
export const datasetCountFailure = (error) => ({
    type: FAILURE_FETCH_DATASET_COUNT,
    payload: error,
})

export const requestTranslationCount = () => ({
    type: REQUEST_FETCH_TRANSLATION_COUNT,
})
export const translationCountSuccess = (data) => ({
    type: SUCCESS_FETCH_TRANSLATION_COUNT,
    payload: data,
})
export const translationCountFailure = (error) => ({
    type: FAILURE_FETCH_TRANSLATION_COUNT,
    payload: error,
})

export const requestReviewedCount = () => ({
    type: REQUEST_FETCH_REVIEWED_COUNT,
})
export const reviewedCountSuccess = (data) => ({
    type: SUCCESS_FETCH_REVIEWED_COUNT,
    payload: data,
})
export const reviewedCountFailure = (error) => ({
    type: FAILURE_FETCH_REVIEWED_COUNT,
    payload: error,
})

export const requestCustomDatasetCount = () => ({
    type: REQUEST_FETCH_CUSTOM_DATASET_COUNT,
})
export const customDatasetCountSuccess = (data) => ({
    type: SUCCESS_FETCH_CUSTOM_DATASET_COUNT,
    payload: data,
})
export const customDatasetCountFailure = (error) => ({
    type: FAILURE_FETCH_CUSTOM_DATASET_COUNT,
    payload: error,
})

export const requestFetchNewline = () => ({
    type: REQUEST_FETCH_NEWLINE,
})
export const fetchNewlineSuccess = (data) => ({
    type: SUCCESS_FETCH_NEWLINE,
    payload: data,
})
export const fetchNewlineFailure = (error) => ({
    type: FAILURE_FETCH_NEWLINE,
    payload: error,
})

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

// export const updateSessionExpiry = (nextDay) => ({
//     type: UPDATE_SESSION_EXPIRY,
//     payload: nextDay,
// })
