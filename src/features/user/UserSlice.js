import { createSlice } from "@reduxjs/toolkit";

const saveduser = localStorage.getItem("curUser");
const UserSlice = createSlice({
  name: "user",
  initialState: {
    user: saveduser ? JSON.parse(saveduser) : {},
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    remUser: (state) => {
      state.user = {};
    },
    setIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
  },
});

export const { setUser, setIsLoggedIn, remUser } = UserSlice.actions;
export default UserSlice.reducer;
