import { meetingUrls } from "../urls";
import { resultTypes } from "../results";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

const initialState = {
  meetings: [],
  loading: false,
  error: "",
  success: ""
};

export const MeetingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case meetingUrls.meeting + methods.GET + resultTypes.SUCCESS:
      return {
        ...state,
        meetings: action.data,
        loading: false,
        success: "",
        error: ""
      };
    case meetingUrls.meeting + methods.PUT + resultTypes.SUCCESS:
      return {
        ...state,
        meetings: action.data,
        loading: false,
        success: "Reunión actualizada correctamente",
        error: ""
      };
    case meetingUrls.meeting + methods.POST + resultTypes.SUCCESS:
      return {
        ...state,
        meetings: action.data,
        loading: false,
        success: "Reunión creada correctamente",
        error: ""
      };
    case meetingUrls.meeting + methods.DELETE + resultTypes.SUCCESS:
      return {
        ...state,
        meetings: action.data,
        loading: false,
        success: "Reunión eliminada correctamente",
        error: ""
      };
    case reducerTypes.MEETING + resultTypes.REQUEST:
      return {
        ...state,
        loading: true
      };
    case reducerTypes.MEETING + resultTypes.ERROR:
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
