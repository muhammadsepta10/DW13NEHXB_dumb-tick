import { combineReducers } from "redux";
import home from "./reducer/home";
import categoryPage from "./reducer/categoryPage";
import eventDetaile from "./reducer/eventDetaile";
import user from "./reducer/user";
import order from "./reducer/order";
// import event from "./reducer/event";

export default combineReducers({
  home: home,
  categoryPage: categoryPage,
  eventDetaile: eventDetaile,
  user: user,
  order: order
});
