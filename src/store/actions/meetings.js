import { meetingUrls } from "../urls";
import { reducerTypes } from "../reducer_types";
import * as methods from "../methods";

export const save = meeting => {
  return {
    method: methods.POST,
    url: meetingUrls.meeting,
    data: meeting,
    reducer: reducerTypes.MEETING
  };
};

export const update = meeting => {
  return {
    method: methods.PUT,
    url: meetingUrls.meeting,
    data: meeting,
    reducer: reducerTypes.MEETING
  };
};

export const deletes = meeting_id => {
  return {
    method: methods.DELETE,
    url: meetingUrls.meeting,
    data: meeting_id,
    reducer: reducerTypes.MEETING
  };
};

export const get = () => {
  return {
    method: methods.GET,
    url: meetingUrls.meeting,
    data: null,
    reducer: reducerTypes.MEETING
  };
};
