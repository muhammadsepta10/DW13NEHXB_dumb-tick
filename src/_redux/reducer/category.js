import { CategoryTypes } from "../config";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false
};

const category = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CategoryTypes.GET_CATEGORY_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case CategoryTypes.GET_CATEGORY_FULFILLED:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case CategoryTypes.GET_CATEGORY_REJECTED:
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
export default category;
