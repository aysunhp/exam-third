import { configureStore } from "@reduxjs/toolkit";
import mealReducer from "./../slices/mealSlice";
export default configureStore({
  reducer: {
    meal: mealReducer,
  },
});
