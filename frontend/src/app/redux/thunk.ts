import { setUsers } from './reducers/usersSlice';
import { login } from './reducers/authSlice';
import axios from 'axios';
import { AppDispatch } from './store';
import { User } from '../../types';

type LoginProps = Pick<User, 'email' | 'password'>

export const fetchUsers = () => async (dispatch: AppDispatch) => {
	try {
		const response = await axios.get('http://localhost:4000/users');
		dispatch(setUsers(response.data.users));
	} catch (error) {
		console.error(error);
	}
};

export const authenticate = ({ email, password }: LoginProps) => async (dispatch: AppDispatch) => {
	await axios.post('http://localhost:4000/login', {
		email, password
	}, {
		withCredentials: true
	}).catch((error) => {
		alert(error.response.data.message);
	})
	dispatch(login());
};