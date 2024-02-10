import { combineReducers } from "redux";
import login, * as fromLogin from "./login";

export const rootReducer = combineReducers({
    "user": login,
});

export default (state, action) => rootReducer(state, action);

export const selectID = state => fromLogin.selectUserID(state.user);
export const selectIsLoggedIn = state => fromLogin.selectIsLoggedIn(state.user);
export const selectLoginIsFetching = state => fromLogin.selectLoginIsFetching(state.user);
export const selectProfile = state => fromLogin.selectProfile(state.user);
export const selectToken = state => fromLogin.selectToken(state.user);
export const selectUserName = state => fromLogin.selectUserName(state.user);
export const selectAdmin = state => fromLogin.selectProfile(state.user).isadmin;

export const selectAuth = state => (
    {
        login: selectToken(state) !== '',
        admin: fromLogin.selectProfile(state.user).isadmin,
    }
);