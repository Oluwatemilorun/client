import { FETCH_DEVICES, FETCH_DEVICE, LOADING_DATA } from "../actions/types";

// define the initial state
const initialState = {
  devices: [],
  device: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true
      };
    case FETCH_DEVICES:
      return {
        ...state,
        devices: action.payload
      };
    case FETCH_DEVICE:
      return {
        ...state,
        device: action.payload
      };

    default:
      return state;
  }
}
