import axios from "axios";
import { OrderTypes } from "./../config";

const API = "http://localhost:5000/api/order";
var config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};
export const getPayment = id => ({
  type: OrderTypes.GET_PAYMENT,
  payload: axios.get(`${API}/payment/${id}`, config)
});

export const getMyTicket = id => ({
  type: OrderTypes.GET_MYTICKET,
  payload: axios.get(`${API}/show_approved/${id}`)
});

export const confirmed = (id, attachment) =>
  axios
    .put(
      `${API}/confirm/${id}`,
      {
        attachment
      },
      config
    )
    .then(input => {
      alert("input event sukses");
      window.location.href = "http://localhost:3000/payment";
    })
    .catch(err => {
      alert("eror", err);
    });

export const addOrder = (event, customer, quantity, totalPrice) =>
  axios
    .post(
      `${API}/pending`,
      {
        event,
        customer,
        quantity,
        totalPrice
      },
      config
    )
    .then(res => {
      alert("order sukses");
      window.location.href = "http://localhost:3000/payment";
    })
    .catch(res => {
      alert((window.location.href = "http://localhost:3000"));
    });
