import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

interface BalanceState {
  balance: number;
  transactions: number[];
}

const initialState: BalanceState = {
  balance: 0,
  transactions: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      state.balance += action.payload;
      state.transactions.push(action.payload);
    },
    withdraw(state, action: PayloadAction<number>) {
      state.balance -= action.payload;
      state.transactions.push(-action.payload);
    },
  },
});

export const { deposit, withdraw } = balanceSlice.actions;

const balanceReducer = balanceSlice.reducer;
export default balanceReducer;
