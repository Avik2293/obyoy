import { combineReducers } from "redux";
import user, * as fromUser from "./login";
import leaderboard, * as fromLeaderboard from "./leaderboard";
import basicCountInfo, * as fromBasicCountInfo from "./basicCountInfo";
import translation, * as fromTranslation from "./translation";
import customDatasets, * as fromCustomDatasets from "./custom";
import withdraws, * as fromWithdraws from "./withdraw";
import userManagement, * as fromUserManagement from "./userManagement";
import datasetManagement, * as fromDatasetManagement from "./datasetManagement";
import customDatasetManagement, * as fromCustomDatasetManagement from "./customDatasetManagement";
import reviewManagement, * as fromReviewManagement from "./reviewManagement";


export const rootReducer = combineReducers({
    "user": user,
    "leaderboard": leaderboard,
    "basicCountInfo": basicCountInfo,
    "translation": translation,
    "withdraws": withdraws,
    "customDatasets": customDatasets,
    "userManagement": userManagement,
    "datasetManagement": datasetManagement,
    "customDatasetManagement": customDatasetManagement,
    "reviewManagement": reviewManagement,
});

const reducerFunction = (state, action) => rootReducer(state, action);
export default reducerFunction;


export const selectID = state => fromUser.selectUserID(state.user);
export const selectToken = state => fromUser.selectToken(state.user);
export const selectIsLoggedIn = state => fromUser.selectIsLoggedIn(state.user);
export const selectIsAdmin = state => fromUser.selectIsAdmin(state.user);
export const selectProfile = state => fromUser.selectProfile(state.user);

export const selectLeaderboardTop = state => fromLeaderboard.selectLeaderboard(state.leaderboard);
export const selectFullLeaderboard = state => fromLeaderboard.selectFullLeaderboard(state.leaderboard);
export const selectBasicCountInfo = state => fromBasicCountInfo.selectBasicCountInfo(state.basicCountInfo);
export const selectLine = state => fromTranslation.selectLine(state.translation);

export const selectWithdraws = state => fromWithdraws.selectWithdraws(state.withdraws);

export const selectCustomDatasets = state => fromCustomDatasets.selectCustomDatasets(state.customDatasets);


// admin
export const selectAllUserData = state => fromUserManagement.selectAllUserData(state.userManagement.usersData);
export const selectSingleUser = state => fromUserManagement.selectSingleUser(state.userManagement.usersData);
export const selectUserWithdraws = state => fromUserManagement.selectUserWithdraws(state.userManagement.usersData);

export const selectAllDatasetsData = state => fromDatasetManagement.selectAllDatasetsData(state.datasetManagement.datasetsData);

export const selectAllCustomDatasetsData = state => fromCustomDatasetManagement.selectAllCustomDatasetsData(state.customDatasetManagement.customDatasetsData);

export const selectReviewedLineData = state => fromReviewManagement.selectReviewedLineData(state.reviewManagement);
