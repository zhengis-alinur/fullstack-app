import { RootState } from "./redux/store";

export const selectUsers = (state: RootState) => state.users.users;
export const selectSuccessLogin = (state: RootState) => state.auth.success;
export const selectIsAuthenticated = (state: RootState) => state.auth.isAuthenticated;