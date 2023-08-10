export type User = {
	_id: string,
	email: string;
	username: string;
	lastLogin: string;
	createdAt: string;
	password: string;
	status: boolean;
};

export type LoginProps = Pick<User, 'email' | 'password'>
export type SignupProps = Pick<User, 'username' | 'email' | 'password'>