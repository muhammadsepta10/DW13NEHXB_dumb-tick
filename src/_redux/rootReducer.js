import { combineReducers } from "redux";
import category from "./reducer/category";
import event from "./reducer/event";

export default combineReducers({
  category: category,
  event: event
});
