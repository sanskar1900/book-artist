import { configureStore } from '@reduxjs/toolkit';
import loginReducers from './uiSlice';

const store = configureStore({
    reducer: {
        login: loginReducers,
    },
});

export default store;