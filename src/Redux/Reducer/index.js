import { combineReducers } from "redux";
import user, * as fromUser from "./login";
import leaderboard, * as fromLeaderboard from "./leaderboard";
import translation, * as fromTranslation from "./translation";

export const rootReducer = combineReducers({
    "user": user,
    "leaderboard": leaderboard,
    "translation": translation,
});

const reducerFunction = (state, action) => rootReducer(state, action);
export default reducerFunction;

export const selectID = state => fromUser.selectUserID(state.user);
export const selectIsLoggedIn = state => fromUser.selectIsLoggedIn(state.user);
export const selectLoginIsFetching = state => fromUser.selectLoginIsFetching(state.user);
export const selectToken = state => fromUser.selectToken(state.user);
export const selectUserName = state => fromUser.selectUserName(state.user);
export const selectAdmin = state => fromUser.selectProfile(state.user).isadmin;

export const selectAuth = state => (
    {
        login: selectToken(state) !== '',
        admin: fromUser.selectProfile(state.user).isadmin,
    }
);


export const selectProfile = state => fromUser.selectProfile(state.user);

export const selectLeaderboardTop = state => fromLeaderboard.selectLeaderboard(state.leaderboard);
// export const selectProfileInfo = state => fromUser.selectProfile(state.user).login;
// export const selectNewLine = state => fromLines.selectNewLine(state.lines);
// export const selectTranslatedLine = state => fromLines.selectTranslatedLine(state.lines);