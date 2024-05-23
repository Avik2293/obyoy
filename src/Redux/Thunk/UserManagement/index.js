import axios from "axios";
import {
    requestAllUsersData,
    allUsersDataSuccess,
    allUsersDataFailure,
    requestUserData,
    userDataSuccess,
    userDataFailure,
    requestUserWithdrawData,
    userWithdrawDataSuccess,
    userWithdrawDataFailure,
    requestUserDelete,
    userDeleteSuccess,
    userDeleteFailure,
} from "../../ActionCreator/userManagement";
import { allUsersData_url, userData_url, userDelete_url, userWithdraws_url } from "../../../allApiPath";


export const allUsersData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllUsersData())

    axios.post(allUsersData_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(allUsersDataSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(allUsersDataFailure(error))
        })
}

export const userData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestUserData())

    axios.post(userData_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(userDataSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(userDataFailure(error))
        })
}

export const userWithdraws = (id, token) => async (dispatch, getState) => {
    dispatch(requestUserWithdrawData())

    axios.post(userWithdraws_url, {
        user_id: id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(userWithdrawDataSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(userWithdrawDataFailure(error))
        })
}

export const userDelete = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestUserDelete())

    axios.post(userDelete_url, {
        user_id: user_id,
    }, {
        headers: {
            'Authorization': token,
        },
    })
        .then((response) => {
            dispatch(userDeleteSuccess(response.data));
        }, error => {
            dispatch(userDeleteFailure(error))
        })
}
