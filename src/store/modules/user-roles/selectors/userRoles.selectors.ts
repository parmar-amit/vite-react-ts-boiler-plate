import { createSelector } from "@reduxjs/toolkit";

// USER ROLES Store Key and State Types, RootState
import { USER_ROLES_KEY } from "../../../tools/constants";
import { UserRolesState, RootState } from "../../../tools/types";

// Get User Roles State
export const getUserRoleState = (rootState: RootState): UserRolesState =>
  rootState[USER_ROLES_KEY];

// Get User Roles loading status
export const selectGetRoleLoadingStatus = createSelector(
  getUserRoleState,
  (userRolesInfo) => userRolesInfo.getRoles.loadingStatus
);
