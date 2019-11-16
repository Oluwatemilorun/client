import { combineReducers } from 'redux';

import { authReducer } from './user/reducer';
import { chatReducer } from './chat/reducers';

const rootReducer = combineReducers({
	auth: authReducer,
	chat: chatReducer
});

export type AppState = ReturnType<typeof rootReducer>