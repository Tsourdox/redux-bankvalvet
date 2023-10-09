import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import {
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import balanceReducer from "./balance/balanceReducer";
import userReducer from "./user/userReducer";

const reducer = combineReducers({
  balance: balanceReducer,
  user: userReducer,
});

export const store = createStore(reducer);

// ----- TYPESCRIPT -----
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch =
  useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> =
  useSelector;
