import { EventTypes } from "./../config";

const INITIAL_STATE = {
  data: [],
  isLoadingDetaileEvent: false,
  isErrorDetaileEvent: false
};

const eventDetaile = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EventTypes.GET_DETAILE_EVENT_PENDING:
      return {
        ...state,
        isLoadingDetaileEvent: true
      };
    case EventTypes.GET_DETAILE_EVENT_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        isLoadingDetaileEvent: false
      };
    case EventTypes.GET_DETAILE_EVENT_REJECTED:
      return {
        ...state,
        isLoadingDetaileEvent: false,
        isErrorDetaileEvent: true
      };
    default:
      return {
        state
      };
  }
};
export default eventDetaile;
