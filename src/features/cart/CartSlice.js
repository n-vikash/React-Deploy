import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartCount: 0,
};
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state,action) => {
      state.cartCount+=1;
      state.cartItems.push(action.payload)
    },
    removeFromCart:(state,action)=>{
        state.cartCount-=1;
        state.cartItems=state.cartItems.filter((item)=>action.payload.id !== item.id);

    }
  },
});

export const {addToCart,removeFromCart}=CartSlice.actions;
export default CartSlice.reducer;