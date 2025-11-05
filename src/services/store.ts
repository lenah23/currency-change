import { configureStore } from "@reduxjs/toolkit";
import currencyReducer from "./Slices/currencySlice";
import currencyModalReducer from "./Slices/modalSlice";

export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    currencyModal: currencyModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
