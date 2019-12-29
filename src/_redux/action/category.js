import { CategoryTypes } from "../config";
import axios from "axios";

const API = "http://localhost:5000/api";

export const getCategory = () => ({
  type: CategoryTypes.GET_CATEGORY,
  payload: axios.get(`${API}/categories`)
});
