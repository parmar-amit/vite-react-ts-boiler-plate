// import reducers and slice key
import { userDetailsReducer } from "./modules/user-details";
import { userRolesReducer } from "./modules/user-roles";
// import slice key
import { USER_ROLES_KEY, USER_DETAILS_KEY } from "./tools/constants";

export const combineAllReducers = {
  // add reducers and slice key as  [key] : reducer
  [USER_ROLES_KEY]: userRolesReducer,
  [USER_DETAILS_KEY]: userDetailsReducer,
};
