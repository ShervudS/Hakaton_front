import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userType: '',
    isVisibleNavigation: false,
};

const reducers = {
    setUserType: (state, action) => {
        state.userType = action.payload;
    },
    setIsVisibleNavigation: (state, action) => {
        state.isVisibleNavigation = action.payload;
    }
};

export const main_reducer = createSlice({
    name: 'main',
    initialState,
    reducers,
});

const {reducer, actions} = main_reducer;

export const {setUserType, setIsVisibleNavigation} = actions;

export default reducer;
