import { createSlice } from '@reduxjs/toolkit';
import type { User } from '../../../types'

type State = {
	users: User[];
}

const initialState: State = {
	users: [],
};

const usersSlice = createSlice({
	name: 'users',
	initialState,
	reducers: {
		setUsers: (state, action) => {
			state.users = action.payload;
		},
	},
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;