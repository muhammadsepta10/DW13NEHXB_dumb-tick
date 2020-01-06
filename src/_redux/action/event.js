import axios from "axios";
import { EventTypes } from "./../config";

const API = "http://localhost:5000/api";
var config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};

export const getEvent = () => ({
  type: EventTypes.GET_EVENT,
  payload: axios.get(`${API}/events`)
});

export const getEventDetaile = id => ({
  type: EventTypes.GET_DETAILE_EVENT,
  payload: axios.get(`${API}/events/event/${id}`)
});

export const addEvent = (
  name,
  category,
  startTime,
  endTime,
  price,
  descrption,
  addres,
  urlMap,
  img,
  createdBy
) =>
  // type: EventTypes.ADD_EVENT,
  axios
    .post(
      `${API}/events/input`,
      {
        name,
        category,
        startTime,
        endTime,
        price,
        descrption,
        addres,
        urlMap,
        img,
        createdBy
      },
      config
    )
    .then(input => {
      alert("input event sukses");
      window.location.href = "http://localhost:3000/input_event";
    })
    .catch(err => {
      alert((window.location.href = "http://localhost:3000"));
    });
