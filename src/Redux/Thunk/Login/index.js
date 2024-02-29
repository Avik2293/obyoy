import axios from "axios";
import {
    // requestLogin,
    // loginSuccess,
    // loginFailure,
    requestUpdateProfile,
    updateProfileSuccess,
    updateProfileFailure,
    // updateSessionExpiry,
} from "../../ActionCreator/login";

// import { BASE_URL } from "../../Constant/login";

// export const login = ({ username, password, nextDate }) => async (dispatch, getState) => {
//     dispatch(requestLogin())

//     axios.post(BASE_URL + "/api/v1/users/login", {
//         email: username,
//         password: password,
//         account_type: "driver",
//     })
//         .then((response) => {
//             dispatch(loginSuccess(response.data));
//             dispatch(updateSessionExpiry(nextDate));
//         }, error => {
//             dispatch(loginFailure())
//         })
// }

export const profileUpdate = (userName, user_email, user_phone, address, birthday, token) => async (dispatch, getState) => {
    dispatch(requestUpdateProfile())

    // axios.post(BASE_URL + "/api/v1/translated_line", {
    axios.post("/api/v1/profile_edit", {
        userName: userName,
        user_email: user_email,
        user_phone: user_phone,
        address: address,
        birthday: birthday,
    }, {
        headers: {
            'Authorization' : token,
        },
    })
        .then((response) => {
            // console.log(response.data);
            dispatch(updateProfileSuccess(response.data));
        }, error => {
            dispatch(updateProfileFailure(error))
        })
}