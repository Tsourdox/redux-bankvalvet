import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { legacy_createStore as createStore } from "redux";
import balanceReducer from "./reducer";

export const store = createStore(balanceReducer);

// ----- TYPESCRIPT -----
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
