import {
    REQUEST_FETCH_DATASETS,
    SUCCESS_FETCH_DATASETS,
    FAILURE_FETCH_DATASETS,
    REQUEST_CREATE_DATASET,
    SUCCESS_CREATE_DATASET,
    FAILURE_CREATE_DATASET,
    REQUEST_FILE_INPUT,
    SUCCESS_FILE_INPUT,
    FAILURE_FILE_INPUT,
    REQUEST_LINE_INPUT,
    SUCCESS_LINE_INPUT,
    FAILURE_LINE_INPUT,
} from "../Constant/custom";


export const requestFetchDatasets = () => ({
    type: REQUEST_FETCH_DATASETS,
})
export const fetchDatasetsSuccess = (data) => ({
    type: SUCCESS_FETCH_DATASETS,
    payload: data,
})
export const fetchDatasetsFailure = (error) => ({
    type: FAILURE_FETCH_DATASETS,
    payload: error,
})

export const requestCreateDataset = () => ({
    type: REQUEST_CREATE_DATASET,
})
export const createDatasetSuccess = (data) => ({
    type: SUCCESS_CREATE_DATASET,
    payload: data,
})
export const createDatasetFailure = (error) => ({
    type: FAILURE_CREATE_DATASET,
    payload: error,
})

export const requestFileInput = () => ({
    type: REQUEST_FILE_INPUT,
})
export const fileInputSuccess = (data) => ({
    type: SUCCESS_FILE_INPUT,
    payload: data,
})
export const fileInputFailure = (error) => ({
    type: FAILURE_FILE_INPUT,
    payload: error,
})

export const requestLineInput = () => ({
    type: REQUEST_LINE_INPUT,
})
export const lineInputSuccess = (data) => ({
    type: SUCCESS_LINE_INPUT,
    payload: data,
})
export const lineInputFailure = (error) => ({
    type: FAILURE_LINE_INPUT,
    payload: error,
})
