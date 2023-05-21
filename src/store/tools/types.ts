import { Types } from "@services";

import { reducer } from "../store";

import { GeneralState } from "./tools";

// create rootstate
export type RootState = ReturnType<typeof reducer>;

export interface UserRolesState {
  getRoles: GeneralState<
    Types.ApiResponse<Types.UserRolesTypes.UserRolesResponse>
  >;
}

export interface UserDetailsState {
  userDetails: GeneralState<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >;
  createdUserDetails: GeneralState<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >;
  updatedUserDetails: GeneralState<
    Types.ApiResponse<Types.UserDetailsTypes.UserDetailsResponse>
  >;
  deletedUserDetails: GeneralState<
    Types.ApiResponse<Types.UserDetailsTypes.DeleteUserDetailsResponse>
  >;
}
