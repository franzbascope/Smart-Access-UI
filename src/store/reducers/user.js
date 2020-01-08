import { userUrls } from "../urls";
import { resultTypes } from "../results";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

const initialState = {
  user: null,
  loading: false,
  error: ""
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case userUrls.login + methods.POST + resultTypes.SUCCESS:
      let user = action.data[0];
      user.token = action.data[1];
      return {
        ...state,
        user: user,
        loading: false,
        error: ""
      };
    case userUrls.logout + resultTypes.SUCCESS:
      return {
        ...state,
        user: null,
        loading: false,
        error: ""
      };
    case reducerTypes.USER + resultTypes.REQUEST:
      return {
        ...state,
        loading: true
      };
    case reducerTypes.USER + resultTypes.ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    default:
      return state;
  }
};
