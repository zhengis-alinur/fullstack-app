import { setUsers } from './reducers/usersSlice';
import { login, loginSuccess, logout } from './reducers/authSlice';
import { AppDispatch } from './store';
import { LoginProps, SignupProps } from '../types';
import { fetchUsers as fetchUsersAPI, signup as signupAPI, deleteUsers as deleteUsersAPI, login as loginAPI, blockUsers as blockUserAPI, unblockUsers as unblockUserAPI, logout as logoutAPI } from '../api';


export const signup = ({ username, email, password }: SignupProps) => async (dispatch: AppDispatch) => {
	signupAPI({ username, email, password }).then((response) => {
		dispatch(authenticate({ email, password }));
	}).catch((error) => {
		alert(error.response.data.message);
	})
};

export const authenticate = (credentials: LoginProps) => async (dispatch: AppDispatch) => {
	loginAPI(credentials).then(() => {
		dispatch(login());
		dispatch(loginSuccess())
	}).catch((error) => {
		alert(error.response.data.message);
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
	}).catch(({ response }) => {
		dispatch(unauthenticate());
		alert(response.data.error);
	})
};

export const deleteUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	deleteUsersAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((err) => {
		dispatch(unauthenticate());
		console.log(err);
	})
}

export const blockUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	blockUserAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((err) => {
		dispatch(unauthenticate());
		console.log(err);
	})
}

export const unblockUsers = (users: string[]) => async (dispatch: AppDispatch) => {
	unblockUserAPI(users).then(() => {
		dispatch(fetchUsers());
	}).catch((err) => {
		dispatch(unauthenticate());
		console.log(err);
	})
}