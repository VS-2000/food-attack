import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
    removeFromCart: (state, action) => {
      const id = action.payload;
      if (state.items[id] > 1) state.items[id]--;
      else delete state.items[id];
    },
    clearCart: (state) => {
      state.items = {};
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
