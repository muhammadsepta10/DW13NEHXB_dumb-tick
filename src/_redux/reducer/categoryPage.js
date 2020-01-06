import { CategoryTypes } from "./../config";

const IS_STATE = {
  category: [],
  event: [],
  isLoadingCategory: false,
  isErrorCategory: false,
  isLoadingEvent: false,
  isErrorEvent: false
};

const categoryPage = (state = IS_STATE, action) => {
  switch (action.type) {
    case CategoryTypes.GET_CATEGORY_ID_PENDING:
      return {
        ...state,
        isLoadingCategory: true
      };
    case CategoryTypes.GET_CATEGORY_ID_FULFILLED:
      return {
        ...state,
        isLoadingCategory: false,
        category: action.payload.data
      };
    case CategoryTypes.GET_CATEGORY_ID_REJECTED:
      return {
        ...state,
        isLoadingCategory: false,
        isErrorCategory: true
      };
    case CategoryTypes.GET_CATEGORY_EVENT_PENDING:
      return {
        ...state,
        isLoadingEvent: true
      };
    case CategoryTypes.GET_CATEGORY_EVENT_FULFILLED:
      return {
        ...state,
        isLoadingEvent: false,
        event: action.payload.data
      };
    case CategoryTypes.GET_CATEGORY_EVENT_REJECTED:
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
export default categoryPage;
