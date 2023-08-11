import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './reducers/usersSlice';
import authReducer from './reducers/authSlice';
import modalSlice from './reducers/modalSlice';

const store = configureStore({
	reducer: {
		users: usersReducer,
		auth: authReducer,
		modal: modalSlice,
	},
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch