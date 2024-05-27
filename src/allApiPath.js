const BASE_URL = "http://localhost:8080";

// login
export const signup_url = `${BASE_URL}/api/v1/users/registration`;                    //ok
export const login_url = `${BASE_URL}/api/v1/users/login`;                            //ok
export const logout_url = `${BASE_URL}/api/v1/users/logout`;
export const profileUpdate_url = `${BASE_URL}/api/v1/profile_edit`;

// home
export const leaderboard_url = `${BASE_URL}/api/v1/leaderboard/topTen`;
export const fullLeaderboard_url = `${BASE_URL}/api/v1/leaderboard/full`;
export const newLine_url = `${BASE_URL}/api/v1/datastream/getnext`;                   //ok
export const translatedLine_url = `${BASE_URL}/api/v1/parallelsentence/create`;       //ok

// custom
export const fetchDatasets_url = `${BASE_URL}/api/v1/custom_datasets`;
export const createNewDataset_url = `${BASE_URL}/api/v1/create_dataset`;
export const datasetFileInput_url = `${BASE_URL}/api/v1/dataset_file_input`;
export const datasetLineInput_url = `${BASE_URL}/api/v1/dataset_line_input`;

// withdraw
export const fetchWithdraws_url = `${BASE_URL}/api/v1/withdraws`;
export const sendWithdrawRequest_url = `${BASE_URL}/api/v1/withdraw_request`;


// admin side------------------->>>

// userManagement
export const allUsersData_url = `${BASE_URL}/api/v1/admin/all_user`;
export const userData_url = `${BASE_URL}/api/v1/admin/single_user`;
export const userWithdraws_url = `${BASE_URL}/api/v1/admin/user_withdraws`;
export const userDelete_url = `${BASE_URL}/api/v1/admin/user_delete`;

// datasetManagement
export const allDatasetsData_url = (skip, limit) => `${BASE_URL}/api/v1/dataset/list/${skip}/${limit}`;      //  ok
export const uploadDataset_url = `${BASE_URL}/api/v1/admin/single_user`;
export const uploadInputDataset_url = `${BASE_URL}/api/v1/dataset/create`;                  //ok
export const datasetDelete_url = `${BASE_URL}/api/v1/admin/dataset_delete`;

// customDatasetManagement
export const allCustomDatasetsData_url = `${BASE_URL}/api/v1/admin/all_custom_dataset`;
export const approveCustomDataset_url = `${BASE_URL}/api/v1/admin/approve_custom_dataset`;
export const downloadCustomDataset_url = `${BASE_URL}/api/v1/admin/download_custom_dataset`;

// reviewManagement
export const reviewingLine_url = `${BASE_URL}/api/v1/admin/reviewing_line`;
export const approveLine_url = `${BASE_URL}/api/v1/admin/approving_line`;
export const rejectLine_url = `${BASE_URL}/api/v1/admin/rejecting_line`;

