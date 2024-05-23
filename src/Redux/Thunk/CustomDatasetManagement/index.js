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
import { allCustomDatasetsData_url, approveCustomDataset_url, downloadCustomDataset_url } from "../../../allApiPath";


export const allCustomDatasetsData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllCustomDatasetsData())

    axios.post(allCustomDatasetsData_url, {
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

    axios.post(approveCustomDataset_url, {
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

    axios.post(downloadCustomDataset_url, {
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
