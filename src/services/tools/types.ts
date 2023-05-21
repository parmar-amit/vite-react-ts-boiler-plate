/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosError } from "axios";

export interface ApiResponse<T = any | undefined> {
  success: boolean;
  status?: number;
  statusCode?: number | null;
  errorMessage?: string | null;
  response?: T;
  error?: AxiosError;
  articule?: any;
  data?: any;
}

export interface HTTPServicesResponse<T = any> {
  success: boolean;
  statusCode?: number | null;
  errorMessage?: string | null;
  payload?: T | null;
  error?: AxiosError;
}

export * as UserDetailsTypes from "../modules/user-details/types";

export * as UserRolesTypes from "../modules/user-roles/types";
