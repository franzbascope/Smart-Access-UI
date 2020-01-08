import { companyUrls } from "../urls";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

export const save = company => {
  return {
    method: methods.POST,
    url: companyUrls.company,
    data: company,
    reducer: reducerTypes.COMPANY
  };
};

export const update = company => {
  return {
    method: methods.PUT,
    url: companyUrls.company,
    data: company,
    reducer: reducerTypes.COMPANY
  };
};

export const get = company_id => {
  return {
    method: methods.GET,
    url: companyUrls.company,
    data: company_id,
    reducer: reducerTypes.COMPANY
  };
};
