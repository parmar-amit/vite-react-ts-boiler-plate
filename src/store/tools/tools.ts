/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Redux Generic State, Error State, General State types/interface
 */

export type LoadingStatus = "not loaded" | "loading" | "loaded" | "error";

export type GenericObj = {
  [key: string]: string | number | boolean | any | null | undefined;
};

export interface StateGenericApi<T = any | undefined> {
  loadingStatus: LoadingStatus;
  error: GenericObj | string | null | undefined;
  data: T | undefined;
}

export const initialApiState: StateGenericApi = {
  loadingStatus: "not loaded",
  error: null,
  data: {},
};

export interface GeneralState<T = any> {
  loadingStatus: LoadingStatus;
  error: GenericObj | string | null | undefined;
  data: T | undefined;
}

export interface AsyncState {
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
}
