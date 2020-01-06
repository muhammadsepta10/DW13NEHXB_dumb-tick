import { userTypes } from "./../config";

const INITIAL_STATE = {
  data: [],
  isLoading: false,
  isError: false
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case userTypes.GET_USER_PENDING:
      return {
        ...state,
        isLoading: true
      };
    case userTypes.GET_USER_FULFILLED:
      return {
        ...state,
        data: action.payload.data,
        isLoading: false
      };
    case userTypes.GET_USER_REJECTED:
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    case userTypes.CHANGE_USER:
      const data = this.state.data.name;
      console.log(data);
      return {
        ...state,
        data: action.newData.data
      };
    default:
      return {
        state
      };
  }
};

export default user;
