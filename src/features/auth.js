import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "bhagwati prasad",
    // dob: new Date('1999-06-30'),
    email: 'bhagwatijoshi325@gmail.com',
    phoneNumber: '8630072236'
};

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers:{
        login: (state , action) => {
            console.log('in reducer payload:' , action.payload);
            return { ...state   , ...action.payload}
        },
        logout: (state , action ) => {
            console.log('in reducer payload:' , action.payload);
            return null;
        }
    }
});

export default authSlice.reducer
export const {login , logout } = authSlice.actions; 
// todo : check above meaning 