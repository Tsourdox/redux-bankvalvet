import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import {
  getApiBalance,
  updateApiBalance,
} from "../api/balance";
import { createAppAsyncThunk } from "./utils";

export interface BalanceState {
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
    builder.addCase(
      getBalance.fulfilled,
      (_state, action) => action.payload
    );
  },
});

export const { withdraw } = balanceSlice.actions;

export const deposit = createAppAsyncThunk<number, number>(
  "balance/deposit",
  async (payload, thunkApi) => {
    const state = thunkApi.getState();

    await updateApiBalance({
      id: state.balance.id,
      balance: state.balance.balance + payload,
      transactions: [
        ...state.balance.transactions,
        payload,
      ],
    });

    return payload;
  }
);

export const getBalance = createAppAsyncThunk<BalanceState>(
  "balance/get",
  async () => {
    return await getApiBalance();
  }
);

const balanceReducer = balanceSlice.reducer;
export default balanceReducer;
