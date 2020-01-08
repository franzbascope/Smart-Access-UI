import axios from "axios";
import * as methods from "../methods";
import { resultTypes } from "../results";

const MAIN_URL = "http://192.168.200.101/";

export function mainAction(arg) {
  const { method, url, data, reducer } = arg;
  return dispatch => {
    dispatch({ type: reducer + resultTypes.REQUEST });
    switch (method) {
      case methods.POST:
        debugger;
        return axios
          .post(MAIN_URL + url, data, {
            headers: {
              Accept: "application/json"
            }
          })
          .then(res => {
            dispatch({
              type: url + method + resultTypes.SUCCESS,
              data: res.data
            });
          })
          .catch(function(error) {
            dispatch({ type: reducer + resultTypes.ERROR, error });
          });
      case methods.GET:
        let transformed_url = `${MAIN_URL}${url}`;
        if (data) {
          transformed_url += "/" + data;
        }
        axios
          .get(transformed_url)
          .then(function(res) {
            dispatch({
              type: url + method + resultTypes.SUCCESS,
              data: res.data,
              params: data
            });
          })
          .catch(function(error) {
            dispatch({ type: reducer + resultTypes.ERROR, error });
          });
        break;
      case methods.PUT:
        axios
          .put(`${MAIN_URL}${url}/${data.id}`, data, {
            headers: {
              Accept: "application/json"
            }
          })
          .then(function(res) {
            dispatch({
              type: url + method + resultTypes.SUCCESS,
              data: res.data
            });
          })
          .catch(function(error) {
            dispatch({ type: reducer + resultTypes.ERROR, error });
          });
        break;
      case methods.DELETE:
        axios
          .delete(`${MAIN_URL}${url}/${data}`)
          .then(function(res) {
            dispatch({
              type: url + method + resultTypes.SUCCESS,
              data: res.data
            });
          })
          .catch(function(error) {
            dispatch({ type: reducer + resultTypes.ERROR, error });
          });
        break;
      default:
        dispatch({ type: url + resultTypes.SUCCESS, data: data });
    }
  };
}
