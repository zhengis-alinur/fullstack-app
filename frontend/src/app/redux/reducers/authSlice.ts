import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';
import { PayloadAction } from '@reduxjs/toolkit';

const initialState: {
	isAuthenticated: boolean,
	success: boolean,
	user: User;
} = {
	isAuthenticated: sessionStorage.getItem('token') ? true : false,
	success: false,
	user: {
		_id: "",
		email: "",
		username: "",
		lastLogin: "",
		createdAt: "",
		password: "",
		status: true
	}
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
		},
		setUser: (state, action: PayloadAction<User>) => {
			state.user = action.payload
		}
	},
});

export const { login, logout, loginSuccess, setUser } = authSlice.actions;
export default authSlice.reducer;