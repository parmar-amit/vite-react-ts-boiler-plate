import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserDetails, Types } from "@services";

// USER DETAILS Store Key
import { USER_DETAILS_KEY } from "../../../tools/constants";

// Get user details
export const getUserDetails = createAsyncThunk(
  `${USER_DETAILS_KEY}/get`,
  async ({ userId }: { userId: string }, { rejectWithValue }) => {
    const response = await apiUserDetails.apiGetUserDetails({ userId });
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);

// create new user
export const createUserDetails = createAsyncThunk(
  `${USER_DETAILS_KEY}/create`,
  async (
    { userData }: { userData: Types.UserDetailsTypes.CreateUserDetailsRequest },
    { rejectWithValue }
  ) => {
    const response = await apiUserDetails.apiCreateUserDetails(userData);
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);

// patch or update existing user
export const updateUserDetails = createAsyncThunk(
  `${USER_DETAILS_KEY}/patch`,
  async (
    {
      userId,
      userData,
    }: {
      userId: string;
      userData: Types.UserDetailsTypes.UpdateUserDetailsRequest;
    },
    { rejectWithValue }
  ) => {
    const response = await apiUserDetails.apiUpdateUserDetails({
      userData,
      userId,
    });
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);

// delete user

export const deleteUserDetails = createAsyncThunk(
  `${USER_DETAILS_KEY}/delete`,
  async ({ userId }: { userId: string }, { rejectWithValue }) => {
    const response = await apiUserDetails.apiDeleteUserDetails({ userId });
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);
