import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../types';

const initialState: {
	token: string | null;
	user: User | null;
} = {
	token: sessionStorage.getItem('token'),
	user: sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')!) : null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state) => {
			state.token = sessionStorage.getItem('token') || null;
		},
		logout: (state) => {
			sessionStorage.clear();
			state.token = null;
			state.user = null;
		},
		updateUser: (state) => {
			state.user = JSON.parse(sessionStorage.getItem('user')!) || null
		}
	},
});

export const { login, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;