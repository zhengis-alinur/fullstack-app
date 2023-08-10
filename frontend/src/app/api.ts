import axios from "axios";
import { LoginProps, SignupProps } from "./types";

const BASE_URL = "https://itransition-task-4-zzps.onrender.com"

const getRequestConfig = () => ({
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${sessionStorage.getItem('token')}`
	}
})


export const fetchUsers = async () => {
	return axios.get(`${BASE_URL}/users`, getRequestConfig());
};

export const login = async ({ email, password }: LoginProps) => {
	return axios.post(`${BASE_URL}/login`, {
		email, password
	})
}

export const logout = async () => {
	return axios.delete(`${BASE_URL}/logout`);
}

export const signup = async ({ username, email, password }: SignupProps) => {
	return await axios.post(`${BASE_URL}/signup`, {
		username, email, password
	})
}


export const deleteUsers = async (userIds: string[]) => {
	return axios.delete(`${BASE_URL}/users`, {
		...getRequestConfig(),
		params: {
			userIds
		}
	})
}

export const blockUsers = async (userIds: string[]) => {
	return axios.post(`${BASE_URL}/users`, {
		userIds, status: 0
	}, getRequestConfig())
}

export const unblockUsers = async (userIds: string[]) => {
	return axios.post(`${BASE_URL}/users`, {
		userIds, status: 1
	}, getRequestConfig())
}