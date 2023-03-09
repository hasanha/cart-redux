import { configureStore } from "@reduxjs/toolkit";
import cartSlices from "./slices/cart-slices";
import productsSlices from "./slices/products-slices";

export const store = configureStore({
  reducer: {
    products: productsSlices,
    cart: cartSlices,
  },
});

export default store;
