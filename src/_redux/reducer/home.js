import { CategoryTypes, EventTypes } from "../config";

const INITIAL_STATE = {
  data: [],
  event: [],
  isLoadingCategory: false,
  isErrorCategory: false,
  isLoadingEvent: false,
  isErrorEvent: false
};

const home = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryTypes.GET_CATEGORY_PENDING:
      return {
        ...state,
        isLoadingCategory: true
      };
    case CategoryTypes.GET_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoadingCategory: false,
        data: action.payload.data
      };
    case CategoryTypes.GET_CATEGORY_REJECTED:
      return {
        ...state,
        isLoadingCategory: false,
        isErrorCategory: true
      };
    case EventTypes.GET_EVENT_PENDING:
      return {
        ...state,
        isLoadingEvent: true
      };
    case EventTypes.GET_EVENT_FULFILLED:
      return {
        ...state,
        isLoadingEvent: false,
        event: action.payload.data
      };
    case EventTypes.GET_EVENT_REJECTED:
      return {
        ...state,
        isLoadingEvent: false,
        isErrorEvent: true
      };
    default:
      return {
        state
      };
  }
};
export default home;
