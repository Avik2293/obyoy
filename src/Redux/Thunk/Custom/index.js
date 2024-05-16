import axios from "axios";
import {
    requestFetchDatasets,
    fetchDatasetsSuccess,
    fetchDatasetsFailure,
    requestCreateDataset,
    createDatasetSuccess,
    createDatasetFailure,
    requestFileInput,
    fileInputSuccess,
    fileInputFailure,
    requestLineInput,
    lineInputSuccess,
    lineInputFailure,
} from "../../ActionCreator/custom";

import { BASE_URL } from "../../Constant/custom";

export const fetchDatasets = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestFetchDatasets())

    // axios.get(BASE_URL + "/api/v1/leaderboard")
    axios.post("/api/v1/custom_datasets", {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(fetchDatasetsSuccess(response.data));
        }, error => {
            dispatch(fetchDatasetsFailure(error))
        })
}

export const createNewDataset = (user_id, newDatasetName, token) => async (dispatch, getState) => {
    dispatch(requestCreateDataset())

    axios.post("/api/v1/create_dataset", {
        user_id: user_id,
        dataset_name: newDatasetName,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(createDatasetSuccess(response.data));
        }, error => {
            dispatch(createDatasetFailure(error))
        })
}

export const datasetFileInput = (user_id, newDatasetName, token) => async (dispatch, getState) => {
    dispatch(requestFileInput())

    axios.post("/api/v1/dataset_file_input", {
        user_id: user_id,
        dataset_name: newDatasetName,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(fileInputSuccess(response.data));
        }, error => {
            dispatch(fileInputFailure(error))
        })
}

export const datasetLineInput = (user_id, datasetId, datasetName, lineInput, translatedLineInput, token) => async (dispatch, getState) => {
    dispatch(requestLineInput())

    axios.post("/api/v1/dataset_line_input", {
        user_id: user_id,
        dataset_id: datasetId,
        dataset_name: datasetName,
        line: lineInput,
        translated_line: translatedLineInput,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(lineInputSuccess(response.data));
        }, error => {
            dispatch(lineInputFailure(error))
        })
}