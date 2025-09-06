import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name:"user",

    initialState:{
        isLogged:false,
        userInfo:null
    },

    reducers:{
        login:(state,action)=>{
            state.isLogged=true,
            state.userInfo=action.payload.userInfo
        },
        logout:(state,action)=>{
            state.isLogged=false,
            state.userInfo=null
        }
        }
});
export const {login, logout}= authSlice.actions
export default authSlice.reducer