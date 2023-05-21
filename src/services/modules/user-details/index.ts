// base api, error handler, api response type
import { baseUrl } from "../../base-api/baseUrl";
import { handleSubModuleError } from "../../tools/apiError";
import { ApiResponse } from "../../tools/types";

// api's request and response types
import {
  UserDetailsResponse,
  CreateUserDetailsRequest,
  UpdateUserDetailsRequest,
  DeleteUserDetailsResponse,
} from "./types";

// get user details
export const apiGetUserDetails = async ({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.get<UserDetailsResponse>(
      `user/${userId}`
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

// create user details
export const apiCreateUserDetails = async (
  userData: CreateUserDetailsRequest
): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.post<UserDetailsResponse>(
      `create-user`,
      userData
    );
    return { response: data, status, success: true };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

// update user details
export const apiUpdateUserDetails = async ({
  userId,
  userData,
}: {
  userId: string;
  userData: UpdateUserDetailsRequest;
}): Promise<ApiResponse<UserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.patch<UserDetailsResponse>(
      `update-user/${userId}`,
      userData
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};

// delete user details
export const apiDeleteUserDetails = async ({
  userId,
}: {
  userId: string;
}): Promise<ApiResponse<DeleteUserDetailsResponse>> => {
  try {
    const { data, status } = await baseUrl.delete<DeleteUserDetailsResponse>(
      `user/${userId}`
    );
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
