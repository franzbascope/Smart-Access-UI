import { companyUrls } from "../urls";
import { resultTypes } from "../results";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

const initialState = {
  company: null,
  loading: false,
  error: "",
  success: ""
};

export const CompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case companyUrls.company + methods.GET + resultTypes.SUCCESS:
      return {
        ...state,
        company: action.data,
        loading: false,
        success: "",
        error: ""
      };
    case companyUrls.company + methods.PUT + resultTypes.SUCCESS:
      return {
        ...state,
        company: action.data,
        loading: false,
        success: "Configuración actualizada correctamente",
        error: ""
      };
    case reducerTypes.COMPANY + resultTypes.REQUEST:
      return {
        ...state,
        loading: true
      };
    case reducerTypes.COMPANY + resultTypes.ERROR:
      return {
        ...state,
        loading: false,
        success: "",
        error: action.error
      };
    default:
      return state;
  }
};
