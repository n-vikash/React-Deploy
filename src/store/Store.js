import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "../features/user/UserSlice";
import ProductReducer from "../features/product/ProductSlice";
import CartReducer from "../features/cart/CartSlice";
export const Store = configureStore({
  reducer: {
    user: UserReducer,
    products: ProductReducer,
    shoppingCart:CartReducer,
  },
});
