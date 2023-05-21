// base api, error handler, api response type
import { baseUrl } from "../../base-api/baseUrl";
import { handleSubModuleError } from "../../tools/apiError";
import { ApiResponse } from "../../tools/types";

// api's request and response types
import { UserRolesResponse } from "./types";

// get user roles
export const apiGetUserRoles = async (): Promise<
  ApiResponse<UserRolesResponse>
> => {
  try {
    const { data, status } = await baseUrl.get("user-roles");
    return { response: data, status, success: !!Object.keys(data).length };
  } catch (error) {
    return handleSubModuleError(error);
  }
};
