import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find(
        (product) => product.id === action.payload.id
      );
      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = {
          ...action.payload,
          quantity: action.payload.quantity,
        };
        console.log("productclone", productClone);
        state.push(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((product) => product.id !== action.payload.id);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export const { addToCart, deleteFromCart, clear } = cartSlice.actions;
export default cartSlice.reducer;
