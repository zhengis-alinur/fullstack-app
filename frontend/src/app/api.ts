import axios from "axios";
import { LoginProps, SignupProps } from "./types";
import { getCookie } from "./utils";

const BASE_URL = "http://localhost:4000"

export const fetchUsers = async () => {
	return axios.get(`${BASE_URL}/users`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getCookie('token')}`
		},
		withCredentials: true
	});
};

export const login = async ({ email, password }: LoginProps) => {
	return axios.post(`${BASE_URL}/login`, {
		email, password
	}, {
		withCredentials: true
	})
}

export const logout = async () => {
	return axios.delete(`${BASE_URL}/logout`);
}

export const signup = async ({ username, email, password }: SignupProps) => {
	return await axios.post(`${BASE_URL}/signup`, {
		username, email, password
	}, {
		withCredentials: true
	})
}


export const deleteUsers = async (userIds: string[]) => {
	return axios.delete(`${BASE_URL}/user/delete`, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getCookie('token')}`
		},
		params: {
			userIds
		}
	})
}

export const blockUsers = async (userIds: string[]) => {
	return axios.post(`${BASE_URL}/user/status`, {
		userIds, status: 0
	}, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getCookie('token')}`,
		},
	})
}

export const unblockUsers = async (userIds: string[]) => {
	return axios.post(`${BASE_URL}/user/status`, {
		userIds, status: 1
	}, {
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${getCookie('token')}`,
		},
	})
}