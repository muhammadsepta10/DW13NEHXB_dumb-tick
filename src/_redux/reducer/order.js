import { OrderTypes } from "./../config";

const INITIAL_STATE = {
  payment: [],
  myTicket: [],
  isLoadingPayment: false,
  isLoadingMyTicket: false,
  isErrorPayment: false,
  isErrorMyTicket: false
};

const order = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OrderTypes.GET_MYTICKET_FULFILLED:
      return {
        ...state,
        myTicket: action.payload.data,
        isLoadingMyTicket: false
      };
    case OrderTypes.GET_MYTICKET_PENDING:
      return {
        ...state,
        isLoadingMyTicket: true
      };
    case OrderTypes.GET_MYTICKET_REJECTED:
      return {
        ...state,
        isLoadingMyTicket: false,
        isErrorMyTicket: true
      };

    case OrderTypes.GET_PAYMENT_FULFILLED:
      return {
        ...state,
        payment: action.payload.data
      };
    case OrderTypes.GET_PAYMENT_PENDING:
      return {
        ...state,
        isLoadingPayment: true
      };
    case OrderTypes.GET_PAYMENT_REJECTED:
      return {
        ...state,
        isLoadingPayment: false,
        isErrorPayment: true
      };

    default:
      return {
        state
      };
  }
};
export default order;
