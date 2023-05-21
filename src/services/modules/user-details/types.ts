// user-details response types
export interface UserDetailsResponse {
  name: string | null;
  email: string | null;
  id: string | null;
}

// create user details request
export interface CreateUserDetailsRequest {
  name: string;
  email: string;
}

// update user details request
export interface UpdateUserDetailsRequest {
  name?: string;
  email?: string;
}

// delete user details response
export interface DeleteUserDetailsResponse {
  id?: string;
}
