import {
  FETCH_DEVICES,
  FETCH_DEVICE,
  LOADING_DATA,
  LOADING_UI,
  STOP_LOADING_UI,
  CLEAR_ERRORS
} from "./types";
import axios from "axios";

// action to get all devices
export const getDevices = () => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/devices")
    .then(res => {
      dispatch({
        type: FETCH_DEVICES,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({ type: FETCH_DEVICES, payload: [] });
    });
};

// action to get a single device
// TODO: handle a single device route from the back end
export const getDevice = deviceId => dispatch => {
  dispatch({ type: LOADING_UI });
  axios.get(`/device /${deviceId}`).then(res => {
    dispatch({ type: FETCH_DEVICE, payload: res.data });
  });
  dispatch({ type: STOP_LOADING_UI }).catch(err => {
    console.log(err);
  });
};

//action to get Hospital data
//TODO: handle this function later
export const getUserData = userName => dispatch => {
  dispatch({ type: LOADING_DATA });
  axios
    .get(`/user/${userName}`)
    .then(res => {
      dispatch({ type: FETCH_DEVICES, payload: res.data.devices });
    })
    .catch(err => {
      dispatch({ type: FETCH_DEVICES, payload: null });
    });
};

// clear errors
export const clearErrors = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
};
