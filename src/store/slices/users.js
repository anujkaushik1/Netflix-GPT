import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
    name: 'users',
    initialState: null,
    reducers: {
        addUser: (state, action) => {
            return action.payload;
        },
        removeUser: (state) => {
            return null;
        },
        updateUser: (state, action) => {
            return {...state, ...action.payload}
            
        }
    }
})

export const {addUser, removeUser, updateUser} = userSlice.actions;
export default userSlice.reducer;