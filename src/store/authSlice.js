import { createSlice } from "@reduxjs/toolkit";

// Initializing initial state for the slice of Redux store.
const initialState = {
    loginStatus: false,
    userData: {
        username: "",
        email: "",
        password: "",
    },
}

//creating slice
const authSlice = createSlice({
    name: "auth",           //name of the reducer (optional)
    initialState,           //Provided initial state for reducer
    reducers: {
        login: (state, action) => {
            state.loginStatus= true;
            state.userData.username= action.payload.username;
            state.userData.email= action.payload.email;
            state.userData.password= action.payload.password;
        },

        logout: (state)=>{
            state.loginStatus= false;
        }
    }
})

export const {login, logout} = authSlice.actions      //Action creators

export default authSlice.reducer;