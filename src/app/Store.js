import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/CartSlice";
import themeReducer from "../features/ThemeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,

  },
});
