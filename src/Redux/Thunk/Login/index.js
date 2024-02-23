import axios from "axios";
import {
    requestLogin,
    loginSuccess,
    loginFailure,
    updateSessionExpiry,
} from "../../ActionCreator/login";

import { BASE_URL } from "../../Constant/login";

export const login = ({ username, password, nextDate }) => async (dispatch, getState) => {
    dispatch(requestLogin())

    axios.post(BASE_URL + "/api/v1/users/login", {
        email: username,
        password: password,
        account_type: "driver",
    })
        .then((response) => {
            dispatch(loginSuccess(response.data));
            dispatch(updateSessionExpiry(nextDate));
        }, error => {
            dispatch(loginFailure())
        })
}