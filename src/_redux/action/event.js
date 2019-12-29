import axios from "axios";

const API = "http://localhost:5000/api";

export const getEvent = () => ({
  type: "GET_EVENT",
  payload: axios.get(`${API}/events`)
});
