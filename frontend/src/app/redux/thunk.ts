import { setUsers } from './reducers/usersSlice';
import { login, logout, updateUser } from './reducers/authSlice';
import { AppDispatch } from './store';
import { LoginProps, SignupProps } from '../types';
import { fetchUsers as fetchUsersAPI, signup as signupAPI, deleteUsers as deleteUsersAPI, login as loginAPI, blockUsers as blockUserAPI, unblockUsers as unblockUserAPI, logout as logoutAPI } from '../api';
import { AxiosError } from 'axios';

const unAuthRequestHandle = ({ response }: AxiosError & {
	response: { data: { error: string } }
}, dispatch: AppDispatch) => {
	if (response && (response.status === 403 || response.status === 401)) {
		dispatch(unauthenticate());
		console.error(response.data.error);
	}
}

export const signup = ({ username, email, password }: SignupProps) => async (dispatch: AppDispatch) => {
	signupAPI({ username, email, password }).then(({ data }) => {
		alert(data.message);
	}).catch((error) => {
		alert(error.response.data.message);
	})
};

export const authenticate = (credentials: LoginProps) => async (dispatch: AppDispatch) => {
	loginAPI(credentials).then(({ data }) => {
		sessionStorage.setItem('token', data.token)
		sessionStorage.setItem('user', JSON.stringify(data.user));
		dispatch(login());
		dispatch(updateUser());
	}).catch((error) => {
		alert(error);
	})
};

export const unauthenticate = () => async (dispatch: AppDispatch) => {
	logoutAPI().then(() => {
		dispatch(logout());
	}).catch((error) => {
		alert(error.response.data.message);
	})
};

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	fetchUsersAPI().then(({ data }) => {
		dispatch(setUsers(data.users));
	}).catch((error) => {
		unAuthRequestHandle(error, dispatch)
	})
};

export const deleteUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	deleteUsersAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((error) => {
		unAuthRequestHandle(error, dispatch)
	})
}

export const blockUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	blockUserAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((error) => {
		unAuthRequestHandle(error, dispatch)
	})
}

export const unblockUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	unblockUserAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((error) => {
		unAuthRequestHandle(error, dispatch)
	})
}