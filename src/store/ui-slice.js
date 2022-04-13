import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: { showCart: false },
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        }
    }
});

const uiActions = uiSlice.actions;

export { uiActions, uiSlice };