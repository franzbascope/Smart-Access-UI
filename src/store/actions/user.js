import { userUrls } from "../urls";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

export const login = user => {
  return {
    method: methods.POST,
    url: userUrls.login,
    data: user,
    reducer: reducerTypes.USER
  };
};

export const logout = () => {
  return {
    method: null,
    url: userUrls.logout,
    data: null,
    reducer: reducerTypes.USER
  };
};
