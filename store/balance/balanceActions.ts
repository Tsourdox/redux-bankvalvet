export interface DepositAction {
  type: "DEPOSIT";
  payload: number;
}

export interface WithdrawAction {
  type: "WITHDRAW";
  payload: number;
}

// Alla actions som den här reducern känner till.
export type BalanceAction = DepositAction | WithdrawAction;
