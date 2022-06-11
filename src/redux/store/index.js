import { configureStore } from '@reduxjs/toolkit';
import mainReducer from '_redux/reducers/main_reducer';
import { reducer as formReducer } from 'redux-form';

export const store = configureStore({
    reducer: {
        main: mainReducer,
        form: formReducer,
    },
});
