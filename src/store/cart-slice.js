import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    amount: 0,
    items: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItem: (state, action) => {
            let itemExist = state.items.find(item => item.id === action.payload.id);
            if (!itemExist) {
                state.items = [...state.items, action.payload];
            } else {
                itemExist.amount += action.payload.amount;
            }
            state.amount = state.amount + +action.payload.amount
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.amount = state.amount - action.payload.amount;
        }
    }
})

const cartActions = cartSlice.actions;

export { cartSlice, cartActions };