import axios from "axios";
import {
    requestAllDatasetsData,
    allDatasetsDataSuccess,
    allDatasetsDataFailure,
    requestUploadDataset,
    uploadDatasetSuccess,
    uploadDatasetFailure,
    requestDatasetDelete,
    datasetDeleteSuccess,
    datasetDeleteFailure,
} from "../../ActionCreator/datasetManagement";

// import { BASE_URL } from "../../Constant/login";

export const allDatasetsData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllDatasetsData())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/all_dataset", {
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

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/single_user", {
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

export const datasetDelete = (dataset_id, token) => async (dispatch, getState) => {
    dispatch(requestDatasetDelete())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/dataset_delete", {
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
