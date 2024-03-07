import axios from "axios";
import {
    requestFetchWithdraws,
    fetchWithdrawsSuccess,
    fetchWithdrawsFailure,
    requestWithdrawRequest,
    withdrawRequestSuccess,
    withdrawRequestFailure,
} from "../../ActionCreator/withdraw";

// import { BASE_URL } from "../../Constant/withdraw";

export const fetchWithdraws = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestFetchWithdraws())

    // axios.get(BASE_URL + "/api/v1/leaderboard")
    axios.post("/api/v1/withdraws", {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(fetchWithdrawsSuccess(response.data));
        }, error => {
            dispatch(fetchWithdrawsFailure(error))
        })
}

export const sendWithdrawRequest = (user_id, amount, system, info, token) => async (dispatch, getState) => {
    dispatch(requestWithdrawRequest())

    // axios.post(BASE_URL + "/api/v1/translated_line", {
    axios.post("/api/v1/withdraw_request", {
        user_id: user_id,
        withdraw_amount: amount,
        withdraw_system: system,
        withdraw_info: info,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(withdrawRequestSuccess(response.data));
        }, error => {
            dispatch(withdrawRequestFailure(error))
        })
}
