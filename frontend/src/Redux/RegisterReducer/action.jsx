import axios from "axios"
import {  POST_REGISTER_REQUEST } from "./actionTypes";
import { baseUrl } from "../../Components/baseUrl";

export const register =(data)=> (dispatch) => {
    console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post(`${baseUrl}/users/register`,data)
  
};

export const login=(data)=>(dispatch)=>{
  // console.log(data)
    
  dispatch({type:POST_REGISTER_REQUEST})

  return axios.post(`${baseUrl}/users/login`,data)
}

