export const UPDATE_AUTH = 'UPDATE_AUTH'

export interface User {
	id: string
	name: string
	email: string
}

export interface AuthState {
	authenticated: boolean
	token: string
	id: string
}

interface UpdateAuthAction {
	type: typeof UPDATE_AUTH
	payload: AuthState
}

export type AuthActionTypes = UpdateAuthAction