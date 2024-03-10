import axios from "axios";
import {
    requestAllCustomDatasetsData,
    allCustomDatasetsDataSuccess,
    allCustomDatasetsDataFailure,
    requestApproveCustomDataset,
    approveCustomDatasetSuccess,
    approveCustomDatasetFailure,
    requestDownloadCustomDataset,
    downloadCustomDatasetSuccess,
    downloadCustomDatasetFailure,
} from "../../ActionCreator/customDatasetManagement";

// import { BASE_URL } from "../../Constant/login";

export const allCustomDatasetsData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllCustomDatasetsData())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/all_custom_dataset", {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(allCustomDatasetsDataSuccess(response.data));
        }, error => {
            dispatch(allCustomDatasetsDataFailure(error))
        })
}

export const approveCustomDataset = (dataset_id, token) => async (dispatch, getState) => {
    dispatch(requestApproveCustomDataset())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/approve_custom_dataset", {
        dataset_id: dataset_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(approveCustomDatasetSuccess(response.data));
        }, error => {
            dispatch(approveCustomDatasetFailure(error))
        })
}

export const downloadCustomDataset = (dataset_id, token) => async (dispatch, getState) => {
    dispatch(requestDownloadCustomDataset())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/download_custom_dataset", {
        dataset_id: dataset_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(downloadCustomDatasetSuccess(response.data));
        }, error => {
            dispatch(downloadCustomDatasetFailure(error))
        })
}
