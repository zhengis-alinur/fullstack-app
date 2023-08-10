import { createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../utils';

const initialState: {
	isAuthenticated: boolean,
	success: boolean
} = {
	isAuthenticated: sessionStorage.getItem('token') ? true : false,
	success: false,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.isAuthenticated = true;
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.success = false;
		},
		loginSuccess: (state) => {
			state.success = true
		}
	},
});

export const { login, logout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;