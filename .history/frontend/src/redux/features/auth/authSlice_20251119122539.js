import { createSlice } from "@reduxjs/toolkit";
import { json } from "body-parser";

const  initialState= {
    userInfo: localStorage.getItem("userInfo")? JSON.parse(localStorage.getItem("userInfo")):null,
};

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers :{
        setCredentials: (state,action)=>{
            state.userInfo=action.payload
            localStorage.setItem("userInfo", json)
        }
    }
})