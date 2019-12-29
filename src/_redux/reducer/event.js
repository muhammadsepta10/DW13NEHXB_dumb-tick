import { CategoryTypes } from "../config";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false
};

const event = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_EVENT_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_EVENT_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case "GET_EVENT_REJECTED":
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    default:
      return {
        state
      };
  }
};
export default event;
