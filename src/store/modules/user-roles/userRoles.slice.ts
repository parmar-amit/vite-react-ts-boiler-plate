import { createSlice } from "@reduxjs/toolkit";

// User Roles store key and State type
import { USER_ROLES_KEY } from "../../tools/constants";
import { UserRolesState } from "../../tools/types";

// User Roles Thunk and Reducers
import { getUserRoles } from "./actions/userRoles.thunk";
import * as reducers from "./reducers/userRoles.reducers";

// default initial state for user roles
const initialState: UserRolesState = {
  getRoles: {
    loadingStatus: "not loaded",
    error: undefined,
    data: undefined,
  },
};

// user roles slice
export const userRolesSlice = createSlice({
  name: USER_ROLES_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserRoles.pending, reducers.getUserRolesPending)
      .addCase(getUserRoles.fulfilled, reducers.getUserRolesFulfilled)
      .addCase(getUserRoles.rejected, reducers.getUserRolesRejected);
  },
});

/**
 * export reducer for store configuration
 */
export const userRolesReducer = userRolesSlice.reducer;

/**
 * export user defined reducers action
 */
export const userRolesActions = userRolesSlice.actions;
