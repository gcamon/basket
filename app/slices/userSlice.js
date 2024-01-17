import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite: []
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCart: (state,action) => {
            state.cart.push(action.payload)
        },
        setFavorite: (state,action) => {
            state.favorite.push(action.payload)
        }
    }
});

export const { 
    setCart,
    setFavorite
} = userSlice.actions;

export const selectCart = (state) => state.user.cart;

export const selectFavorite = (state) => state.user.favorite;


export default userSlice.reducer;