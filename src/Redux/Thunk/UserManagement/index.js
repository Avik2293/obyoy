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

// import { BASE_URL } from "../../Constant/login";

export const allUsersData = (user_id, token) => async (dispatch, getState) => {
    dispatch(requestAllUsersData())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/all_user", {
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
            dispatch(userDataSuccess(response.data));
            // dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(userDataFailure(error))
        })
}

export const userWithdraws = (id, token) => async (dispatch, getState) => {
    dispatch(requestUserWithdrawData())

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/user_withdraws", {
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

    // axios.post(BASE_URL + "/api/v1/users/login", {
    axios.post("/api/v1/admin/user_delete", {
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
