import { userTypes } from "./../config";
import Axios from "axios";

const API = "http://localhost:5000/api/user/";
var config = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
};

export const getUser = id => ({
  type: userTypes.GET_USER,
  payload: Axios.get(`${API}/${id}`, config)
});

export const changeUser = (id, name, phoneNumber, img) =>
  Axios.put(
    `${API}/edit/${id}`,
    {
      name,
      phoneNumber,
      img
    },
    config
  )
    .then(
      (localStorage["name"] = name),
      (localStorage["phoneNumber"] = phoneNumber),
      (localStorage["img"] = img),
      alert("sukses", (window.location.href = "http://localhost:3000/profile"))
    )
    .catch((window.location.href = "http://localhost:3000"));
