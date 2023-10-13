import { configureStore } from "@reduxjs/toolkit";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import balanceReducer from "./balanceSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch =
  useDispatch;

// Behövs den här längre?
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;

export default store;
