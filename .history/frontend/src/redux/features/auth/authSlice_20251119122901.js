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
            localStorage.setItem("userInfo", JSON.stringify(action.payload))
            const expiration= 30*24*60*60*60*1000
            localStorage.setItem("expiration", JSON.stringify(expiration))
        },

        logout: (state)=>{
            state.userInfo=null;
            localStorage.clear();
        },
    }
})