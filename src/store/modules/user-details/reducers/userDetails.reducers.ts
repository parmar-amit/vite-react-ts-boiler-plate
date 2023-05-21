import { PayloadAction } from "@reduxjs/toolkit";
import { Types } from "@services";

import { UserDetailsState } from "../../../tools/types";

// GET user details ---
export const getUserDetailsPending = (state: UserDetailsState) => {
  state.userDetails.loadingStatus = "loading";
  state.userDetails.data = undefined;
  state.userDetails.error = undefined;
};

export const getUserDetailsFulfilled = (
  state: UserDetailsState,
  action: PayloadAction<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >
) => {
  state.userDetails.data = action.payload;
  state.userDetails.loadingStatus = "loaded";
};

export const getUserDetailsRejected = (
  state: UserDetailsState,
  action: any
) => {
  state.userDetails.loadingStatus = "error";
  state.userDetails.error = action.payload || action.error;
};

// Create new user details ----
export const createUserDetailsPending = (state: UserDetailsState) => {
  state.createdUserDetails.loadingStatus = "loading";
  state.createdUserDetails.data = undefined;
  state.createdUserDetails.error = undefined;
};

export const createUserDetailsFulfilled = (
  state: UserDetailsState,
  action: PayloadAction<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >
) => {
  state.createdUserDetails.data = action.payload;
  state.createdUserDetails.loadingStatus = "loaded";
};

export const createUserDetailsRejected = (
  state: UserDetailsState,
  action: any
) => {
  state.createdUserDetails.loadingStatus = "error";
  state.createdUserDetails.error = action.payload || action.error;
};

// Update user details ----
export const updateUserDetailsPending = (state: UserDetailsState) => {
  state.updatedUserDetails.loadingStatus = "loading";
  state.updatedUserDetails.data = undefined;
  state.updatedUserDetails.error = undefined;
};

export const updateUserDetailsFulfilled = (
  state: UserDetailsState,
  action: PayloadAction<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >
) => {
  state.updatedUserDetails.data = action.payload;
  state.updatedUserDetails.loadingStatus = "loaded";
};

export const updateUserDetailsRejected = (
  state: UserDetailsState,
  action: any
) => {
  state.updatedUserDetails.loadingStatus = "error";
  state.updatedUserDetails.error = action.payload || action.error;
};

// Delete user details ----
export const deleteUserDetailsPending = (state: UserDetailsState) => {
  state.deletedUserDetails.loadingStatus = "loading";
  state.deletedUserDetails.data = undefined;
  state.deletedUserDetails.error = undefined;
};

export const deleteUserDetailsFulfilled = (
  state: UserDetailsState,
  action: PayloadAction<
    Types.ApiResponse<Types.UserDetailsTypes.DeleteUserDetailsResponse>
  >
) => {
  state.deletedUserDetails.data = action.payload;
  state.deletedUserDetails.loadingStatus = "loaded";
};

export const deleteUserDetailsRejected = (
  state: UserDetailsState,
  action: any
) => {
  state.deletedUserDetails.loadingStatus = "error";
  state.deletedUserDetails.error = action.payload || action.error;
};
