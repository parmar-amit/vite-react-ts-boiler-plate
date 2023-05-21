import { createSlice } from "@reduxjs/toolkit";

// User Details store key and State type
import { USER_DETAILS_KEY } from "../../tools/constants";
import { UserDetailsState } from "../../tools/types";

// user details thunk actions and reducers
import {
  createUserDetails,
  deleteUserDetails,
  getUserDetails,
  updateUserDetails,
} from "./actions/userDetails.thunk";
import * as reducers from "./reducers/userDetails.reducers";

// default initial state for user details
const initialState: UserDetailsState = {
  userDetails: {
    loadingStatus: "not loaded",
    error: undefined,
    data: undefined,
  },
  createdUserDetails: {
    loadingStatus: "not loaded",
    error: undefined,
    data: undefined,
  },
  updatedUserDetails: {
    loadingStatus: "not loaded",
    error: undefined,
    data: undefined,
  },
  deletedUserDetails: {
    loadingStatus: "not loaded",
    error: undefined,
    data: undefined,
  },
};

// user details slice
export const userDetailsSlice = createSlice({
  name: USER_DETAILS_KEY,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserDetails.pending, reducers.getUserDetailsPending)
      .addCase(getUserDetails.fulfilled, reducers.getUserDetailsFulfilled)
      .addCase(getUserDetails.rejected, reducers.getUserDetailsRejected)
      .addCase(createUserDetails.pending, reducers.createUserDetailsPending)
      .addCase(createUserDetails.fulfilled, reducers.createUserDetailsFulfilled)
      .addCase(createUserDetails.rejected, reducers.createUserDetailsRejected)
      .addCase(updateUserDetails.pending, reducers.updateUserDetailsPending)
      .addCase(updateUserDetails.fulfilled, reducers.updateUserDetailsFulfilled)
      .addCase(updateUserDetails.rejected, reducers.updateUserDetailsRejected)
      .addCase(deleteUserDetails.pending, reducers.deleteUserDetailsPending)
      .addCase(deleteUserDetails.fulfilled, reducers.deleteUserDetailsFulfilled)
      .addCase(deleteUserDetails.rejected, reducers.deleteUserDetailsRejected);
  },
});

/**
 * export reducer for store configuration
 */
export const userDetailsReducer = userDetailsSlice.reducer;

/**
 * export user defined reducers action
 */
export const userDetailsActions = userDetailsSlice.actions;
