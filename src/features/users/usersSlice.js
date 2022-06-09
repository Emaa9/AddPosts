import {createSlice } from "@reduxjs/toolkit";

const initialState= [
    { id: '0', name: 'Mike Anderson'},
    { id: '2', name: 'Neil Yound'},
    { id: '3', name: 'Dude Labowski'},
]

const usersSlice = createSlice({
    name:'users',
    initialState,
    reducers: {

    }
})

export const selectAllUsers = (state)=> state.users;
export default usersSlice.reducer;