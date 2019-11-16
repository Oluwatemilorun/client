import { AuthState, UPDATE_AUTH, AuthActionTypes } from './types'

export const updateAuth = (newAuth: AuthState): AuthActionTypes => {
	return {
		type: UPDATE_AUTH,
		payload: newAuth
	}
}