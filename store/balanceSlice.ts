import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { createAppAsyncThunk } from "./utils";

interface BalanceState {
  id: string;
  balance: number;
  transactions: number[];
}

const initialState: BalanceState = {
  id: "id_from_when_bank_account_was_created",
  balance: 0,
  transactions: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
      state.transactions.push(-action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(deposit.fulfilled, (state, action) => {
      state.balance += action.payload;
      state.transactions.push(action.payload);
    });
  },
});

export const { withdraw } = balanceSlice.actions;

export const deposit = createAppAsyncThunk<number, number>(
  "balance/deposit",
  async (payload, thunkApi) => {
    const state = thunkApi.getState();

    const balanceRef = doc(db, "balance", state.balance.id);

    await setDoc(balanceRef, {
      id: state.balance.id,
      balance: state.balance.balance + payload,
      transactions: [
        ...state.balance.transactions,
        payload,
      ],
    } satisfies BalanceState);

    return payload;
  }
);

const balanceReducer = balanceSlice.reducer;
export default balanceReducer;
