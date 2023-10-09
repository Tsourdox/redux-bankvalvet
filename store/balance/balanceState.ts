export interface BalanceState {
  balance: number;
  transactions: number[];
}

export const initialState: BalanceState = {
  balance: 0,
  transactions: [],
};
