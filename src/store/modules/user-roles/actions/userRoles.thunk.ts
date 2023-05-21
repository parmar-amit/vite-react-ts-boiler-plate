import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUserRoles } from "@services";

// User Roles Store Key
import { USER_ROLES_KEY } from "../../../tools/constants";

// Get user roles
export const getUserRoles = createAsyncThunk(
  `${USER_ROLES_KEY}/get`,
  async (_: void, { rejectWithValue }) => {
    const response = await apiUserRoles.apiGetUserRoles();
    if (!response.success) throw rejectWithValue(response);
    return response;
  }
);
