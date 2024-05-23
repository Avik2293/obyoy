import axios from "axios";
import {
    requestAllDatasetsData,
    allDatasetsDataSuccess,
    allDatasetsDataFailure,
    requestUploadInputDataset,
    uploadInputDatasetSuccess,
    uploadInputDatasetFailure,
    requestUploadDataset,
    uploadDatasetSuccess,
    uploadDatasetFailure,
    requestDatasetDelete,
    datasetDeleteSuccess,
    datasetDeleteFailure,
} from "../../ActionCreator/datasetManagement";
import { allDatasetsData_url, datasetDelete_url, uploadDataset_url, uploadInputDataset_url } from "../../../allApiPath";

export const allDatasetsData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllDatasetsData())

    axios.post(allDatasetsData_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(allDatasetsDataSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(allDatasetsDataFailure(error))
        })
}

export const uploadDataset = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestUploadDataset())

    axios.post(uploadDataset_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(uploadDatasetSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(uploadDatasetFailure(error))
        })
}

export const uploadInputDataset = (datasetName, datasetLanguage, linesArray, token) => async (dispatch, getState) => {
    dispatch(requestUploadInputDataset())

    axios.post(uploadInputDataset_url, {
        name: datasetName,
        source_language: datasetLanguage,
        set: linesArray,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(uploadInputDatasetSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(uploadInputDatasetFailure(error))
        })
}

export const datasetDelete = (dataset_id, token) => async (dispatch, getState) => {
    dispatch(requestDatasetDelete())

    axios.post(datasetDelete_url, {
        dataset_id: dataset_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(datasetDeleteSuccess(response.data));
        }, error => {
            dispatch(datasetDeleteFailure(error))
        })
}
