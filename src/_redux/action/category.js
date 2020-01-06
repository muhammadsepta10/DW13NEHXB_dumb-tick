import { CategoryTypes } from "../config";
import axios from "axios";

const API = "http://localhost:5000/api/categories";

export const getCategory = () => ({
  type: CategoryTypes.GET_CATEGORY,
  payload: axios.get(`${API}`)
});

export const getEventCategory = id => ({
  type: CategoryTypes.GET_CATEGORY_ID,
  payload: axios.get(`${API}/category/${id}`)
});

export const getCategoryId = id => ({
  type: CategoryTypes.GET_CATEGORY_EVENT,
  payload: axios.get(`http://localhost:5000/api/events/category/${id}`)
});
