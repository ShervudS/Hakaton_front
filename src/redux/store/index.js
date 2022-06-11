import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '_redux/reducers/main_reducer';

export const store = configureStore({
    reducer: {
        main: mainReducer,
    },
});
