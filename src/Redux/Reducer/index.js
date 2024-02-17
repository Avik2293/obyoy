import { combineReducers } from "redux";
import login, * as fromLogin from "./login";
// import topTen, lines, * as fromHome from "./home";
import topTen, * as fromTopTen from "./home";
import lines, * as fromLines from "./home";

export const rootReducer = combineReducers({
    "user": login,
    "leaderboard": topTen,
    "lines": lines,
    "error": '',
});

const reducerFunction = (state, action) => rootReducer(state, action);
export default reducerFunction;

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


export const selectLeaderboardTop = state => fromTopTen.selectLeaderboard(state.leaderboard);
// export const selectProfileInfo = state => fromLogin.selectProfile(state.user).login;
export const selectNewLine = state => fromLines.selectNewLine(state.lines);
export const selectTranslatedLine = state => fromLines.selectTranslatedLine(state.lines);