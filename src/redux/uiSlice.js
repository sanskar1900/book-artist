import { createSlice } from '@reduxjs/toolkit';

const initialLoginState = {
    showLoginDrawer: false,
};

const loginSlice = createSlice({
    name: 'uiSlice',
    initialState: initialLoginState,
    reducers: {
        openLoginDrawer: (state) => {
            state.showLoginDrawer = true;
        },
        closeLoginDrawer: (state) => {
            state.showLoginDrawer = false;
        },
    },
});

export const { openLoginDrawer, closeLoginDrawer } = loginSlice.actions;

export default loginSlice.reducer;
