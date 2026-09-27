import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

export const fetchproduct = createAsyncThunk("product/fetching", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("the data is not fetching");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err.message);
    throw err;
  }
});

const initialState = {
  product: [],
  loading: false,
  err: null,
};
const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchproduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchproduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchproduct.rejected, (state, action) => {
      state.loading = false;
      state.err = action.error.message;
    });
  },
});

export default ProductSlice.reducer;
