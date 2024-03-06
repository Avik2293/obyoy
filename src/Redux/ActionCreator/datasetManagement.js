import {
    REQUEST_ALL_DATASET,
    SUCCESS_ALL_DATASET,
    FAILURE_ALL_DATASET,
    REQUEST_UPLOAD_DATASET,
    SUCCESS_UPLOAD_DATASET,
    FAILURE_UPLOAD_DATASET,
    REQUEST_DATASET_DELETE,
    SUCCESS_DATASET_DELETE,
    FAILURE_DATASET_DELETE,
} from "../Constant/datasetManagement";


export const requestAllDatasetsData = () => ({
    type: REQUEST_ALL_DATASET,
})
export const allDatasetsDataSuccess = (data) => ({
    type: SUCCESS_ALL_DATASET,
    payload: data,
})
export const allDatasetsDataFailure = (error) => ({
    type: FAILURE_ALL_DATASET,
    payload: error,
})

export const requestUploadDataset = () => ({
    type: REQUEST_UPLOAD_DATASET,
})
export const uploadDatasetSuccess = (data) => ({
    type: SUCCESS_UPLOAD_DATASET,
    payload: data,
})
export const uploadDatasetFailure = (error) => ({
    type: FAILURE_UPLOAD_DATASET,
    payload: error,
})

export const requestDatasetDelete = () => ({
    type: REQUEST_DATASET_DELETE,
    // payload: token,
})
export const datasetDeleteSuccess = (data) => ({
    type: SUCCESS_DATASET_DELETE,
    payload: data,
})
export const datasetDeleteFailure = (error) => ({
    type: FAILURE_DATASET_DELETE,
    payload: error,
})
