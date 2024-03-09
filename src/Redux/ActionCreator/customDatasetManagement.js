import {
    REQUEST_FETCH_CUSTOM_DATASETS,
    SUCCESS_FETCH_CUSTOM_DATASETS,
    FAILURE_FETCH_CUSTOM_DATASETS,
    REQUEST_APPROVE_CUSTOM_DATASET,
    SUCCESS_APPROVE_CUSTOM_DATASET,
    FAILURE_APPROVE_CUSTOM_DATASET,
    REQUEST_DOWNLOAD_CUSTOM_DATASET,
    SUCCESS_DOWNLOAD_CUSTOM_DATASET,
    FAILURE_DOWNLOAD_CUSTOM_DATASET,
} from "../Constant/customDatasetManagement";


export const requestAllCustomDatasetsData = () => ({
    type: REQUEST_FETCH_CUSTOM_DATASETS,
})
export const allCustomDatasetsDataSuccess = (data) => ({
    type: SUCCESS_FETCH_CUSTOM_DATASETS,
    payload: data,
})
export const allCustomDatasetsDataFailure = (error) => ({
    type: FAILURE_FETCH_CUSTOM_DATASETS,
    payload: error,
})

export const requestApproveCustomDataset = () => ({
    type: REQUEST_APPROVE_CUSTOM_DATASET,
})
export const approveCustomDatasetSuccess = (data) => ({
    type: SUCCESS_APPROVE_CUSTOM_DATASET,
    payload: data,
})
export const approveCustomDatasetFailure = (error) => ({
    type: FAILURE_APPROVE_CUSTOM_DATASET,
    payload: error,
})

export const requestDownloadCustomDataset = () => ({
    type: REQUEST_DOWNLOAD_CUSTOM_DATASET,
    // payload: token,
})
export const downloadCustomDatasetSuccess = (data) => ({
    type: SUCCESS_DOWNLOAD_CUSTOM_DATASET,
    payload: data,
})
export const downloadCustomDatasetFailure = (error) => ({
    type: FAILURE_DOWNLOAD_CUSTOM_DATASET,
    payload: error,
})
