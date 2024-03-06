import { combineReducers } from "redux";
import user, * as fromUser from "./login";
import leaderboard, * as fromLeaderboard from "./leaderboard";
import translation, * as fromTranslation from "./translation";
import customDatasets, * as fromCustomDatasets from "./custom";
import withdraws, * as fromWithdraws from "./withdraw";
import userManagement, * as fromUserManagement from "./userManagement";


export const rootReducer = combineReducers({
    "user": user,
    "leaderboard": leaderboard,
    "translation": translation,
    "withdraws": withdraws,
    "customDatasets": customDatasets,
    "userManagement": userManagement,
});

const reducerFunction = (state, action) => rootReducer(state, action);
export default reducerFunction;


export const selectID = state => fromUser.selectUserID(state.user);
export const selectToken = state => fromUser.selectToken(state.user);
export const selectIsLoggedIn = state => fromUser.selectIsLoggedIn(state.user);
export const selectIsAdmin = state => fromUser.selectIsAdmin(state.user);
export const selectProfile = state => fromUser.selectProfile(state.user);

export const selectLeaderboardTop = state => fromLeaderboard.selectLeaderboard(state.leaderboard);
export const selectLine = state => fromTranslation.selectLine(state.translation);

export const selectWithdraws = state => fromWithdraws.selectWithdraws(state.withdraws);

export const selectCustomDatasets = state => fromCustomDatasets.selectCustomDatasets(state.customDatasets);

export const selectAllUserData = state => fromUserManagement.selectAllUserData(state.userManagement.usersData);
export const selectSingleUser = state => fromUserManagement.selectSingleUser(state.userManagement.usersData);
export const selectUserWithdraws = state => fromUserManagement.selectUserWithdraws(state.userManagement.usersData);






// export const selectLoginIsFetching = state => fromUser.selectLoginIsFetching(state.user);
// export const selectUserName = state => fromUser.selectUserName(state.user);
// export const selectAuth = state => (
//     {
//         login: selectToken(state) !== '',
//         admin: fromUser.selectProfile(state.user).isadmin,
//     }
// );