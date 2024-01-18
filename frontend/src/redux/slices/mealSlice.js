import {
  createSlice,
  createAsyncThunk,
  current,
  isAction,
} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("user/fetchData", async () => {
  const response = await axios.get(`http://localhost:8000/api`).then((res) => {
    return res.data;
  });
  return response;
});

export const postData = createAsyncThunk("user/postData", async (obj) => {
  const response = await axios.post(`http://localhost:8000/api`, obj);
  return response.data;
});

export const deleteData = createAsyncThunk("user/deleteData", async (id) => {
  const response = await axios.delete(`http://localhost:8000/api/` + id);
  return response.data;
});

export const mealSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    basket: [],
    wishlist: [],
  },
  reducers: {
    addBasket: (state, action) => {
      let foundIndex = state.basket.findIndex(item => item._id == action.payload._id)

      if (foundIndex !== -1) {
        state.basket = current(state.basket).map((item, index) => index == foundIndex ? { ...item, quantity: item.quantity + 1 } : item)
      } else {
        state.basket = [...current(state.basket), { ...action.payload, quantity: 1 }];
      }
    },
    increaseBasket: (state, action) => {
      let foundIndex = state.basket.findIndex(item => item._id == action.payload._id)
      state.basket = current(state.basket).map((item, index) => index == foundIndex ? { ...item, quantity: item.quantity + 1 } : item)
    },
    decreaseBasket: (state, action) => {
      let foundIndex = state.basket.findIndex(item => item._id == action.payload._id)
      state.basket = current(state.basket).map((item, index) => index == foundIndex ? { ...item, quantity: item.quantity - 1 } : item)
    },
    deleteBasket: (state, action) => {
      state.basket = current(state.basket).filter(
        (item) => item._id != action.payload
      );
    },
    addWishlist: (state, action) => {
      let found = state.wishlist.find((item) => item._id == action.payload._id);
      if (found) {
        state.wishlist = current(state.wishlist).filter(
          (item) => item._id != action.payload._id
        );
      } else {
        state.wishlist = [...current(state.wishlist), action.payload];
      }
    },
    deleteWishlist: (state, action) => {
      state.wishlist = current(state.wishlist).filter(
        (item) => item._id != action.payload._id
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        console.log(state.data);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
    builder
      .addCase(deleteData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = state.data.filter(
          (item) => item._id != action.payload._id
        );
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = "succeeded";
        console.log(action.payload);
        state.data = [...state.data, action.payload];
        console.log(state.data);
      })
      .addCase(postData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addBasket, addWishlist, deleteWishlist, increaseBasket, decreaseBasket, deleteBasket } = mealSlice.actions;

export default mealSlice.reducer;
