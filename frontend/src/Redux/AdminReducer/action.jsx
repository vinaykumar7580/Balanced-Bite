import { baseUrl } from "../../Components/baseUrl";
import { LOADING } from "./actionType";
import axios from "axios";

export const adminlogin = (data) => (dispatch) => {
  // console.log(data)

  dispatch({ type: LOADING });

  return axios.post(`${baseUrl}/admin-auth/login`, data);
};

export const getallusersdata = (dispatch) => {
  dispatch({ type: LOADING });

  return axios.get(`${baseUrl}/admin-auth/allusers`);
};

export const getallproducts = (dispatch) => {
  dispatch({ type: LOADING });

  return axios.get(`${baseUrl}/admin-auth/adminproducts`);
};

export const addproduct = (data) => (dispatch) => {
  dispatch({ type: LOADING });
  return axios.post(`${baseUrl}/admin-auth/add`, data);
};

export const updateproduct = (id, data) => (dispatch) => {
  dispatch({ type: LOADING });
  return axios.patch(`${baseUrl}/admin-auth/update/${id}`, data);
};

export const deleteproduct = (id) => (dispatch) => {
  dispatch({ type: LOADING });
  return axios.delete(`${baseUrl}/admin-auth/delete/${id}`);
};
