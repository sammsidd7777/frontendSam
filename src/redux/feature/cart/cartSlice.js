import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartCount:localStorage.getItem('cartCountL') ? localStorage.getItem('cartCountL') : 0,
    },
    reducers:{
        updateCartCount : (state) => {
            state.cartCount += 1;
            localStorage.setItem('cartCountL', state.cartCount);
        },

    }
});

export const { updateCartCount } = cartSlice.actions;

export const cCount = (state) => state.cart.cartCount;

export default cartSlice.reducer;