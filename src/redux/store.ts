import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import userReducer from "./slices/userSlice.ts";
import productReducer from "./slices/productSlice.ts";
import orderReducer from "./slices/orderSlice.ts";

export const store = configureStore({
  reducer: { user: userReducer, product: productReducer, order: orderReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
