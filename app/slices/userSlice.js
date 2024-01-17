import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    favorite: [],
    isAddedCart: false,
    isAddedFavorite: false
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
        },
        setIsAddedCart: (state,action) => {
            state.isAddedCart = action.payload
        },
        setIsAddedFavorite: (state,action) => {
            state.isAddedFavorite = action.payload
        }
    }
});

export const { 
    setCart,
    setFavorite,
    setIsAddedCart,
    setIsAddedFavorite
} = userSlice.actions;

export const selectCart = (state) => state.user.cart;

export const selectFavorite = (state) => state.user.favorite;

export const selectIsAddedCart = (state) => state.user.isAddedCart;

export const selectIsAddedFavorite = (state) => state.user.isAddedFavorite;



export default userSlice.reducer;