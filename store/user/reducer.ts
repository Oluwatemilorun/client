import {
	AuthActionTypes,
	AuthState,
	UPDATE_AUTH
} from './types'

const initialAuthState: AuthState = {
	authenticated: false,
	token: '',
	id: ''
}

export function authReducer(
	state = initialAuthState,
	action: AuthActionTypes
): AuthState {
	switch (action.type) {
		case UPDATE_AUTH: {
			return {
				...state,
				...action.payload
			}
		}
		default:
			return state
	}
}