import { RootState } from "./redux/store";

export const selectUsers = (state: RootState) => state.users.users;
export const selectUser = (state: RootState) => state.auth.user;
export const selectToken = (state: RootState) => state.auth.token;
export const selectIsAuthenticated = (state: RootState) => state.auth.token ? true : false;