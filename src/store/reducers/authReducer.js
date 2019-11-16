import {
  SET_USER,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  LOADING_USER
} from "../actions/types";

// define the initialState
const initialState = {
  authenticated: false,
  loading: false,
  credentials: {}
};

//reducer to check authenticated user action type
export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_USER:
      return {
        authenticated: true,
        loading: false,
        ...action.payload
      };
    case LOADING_USER:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
