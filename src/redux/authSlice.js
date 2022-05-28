import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        uid: null,
        displayName: null,
        email: null,
        phoneNumber: null,
        photoURL: null,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user.uid = action.payload.uid;
            state.user.displayName = action.payload.displayName;
            state.user.email = action.payload.email;
            state.user.phoneNumber = action.payload.phoneNumber;
            state.user.photoURL = action.payload.photoURL;
        },
        logout: state => {
            state.user.uid = null;
            state.user.displayName = null;
            state.user.email = null;
            state.user.phoneNumber = null;
            state.user.photoURL = null;
        }
    }
})

export const { setUser, logout } = authSlice.actions;

export default authSlice.reducer;