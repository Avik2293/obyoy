import axios from "axios";
import {
    requestFetchWithdraws,
    fetchWithdrawsSuccess,
    fetchWithdrawsFailure,
    requestWithdrawRequest,
    withdrawRequestSuccess,
    withdrawRequestFailure,
} from "../../ActionCreator/withdraw";
import { fetchWithdraws_url, sendWithdrawRequest_url } from "../../../allApiPath";


export const fetchWithdraws = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestFetchWithdraws())

    axios.post(fetchWithdraws_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(fetchWithdrawsSuccess(response.data));
        }, error => {
            dispatch(fetchWithdrawsFailure(error))
        })
}

export const sendWithdrawRequest = (user_id, amount, system, info, token) => async (dispatch, getState) => {
    dispatch(requestWithdrawRequest())

    axios.post(sendWithdrawRequest_url, {
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
            dispatch(withdrawRequestSuccess(response.data));
        }, error => {
            dispatch(withdrawRequestFailure(error))
        })
}
