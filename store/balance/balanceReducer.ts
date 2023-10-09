import { BalanceAction } from "./balanceActions";
import { BalanceState, initialState } from "./balanceState";

type KnownAction = BalanceAction;

export default function balanceReducer(
  state: BalanceState = initialState,
  action: KnownAction
) {
  switch (action.type) {
    case "DEPOSIT": {
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [
          ...state.transactions,
          action.payload,
        ],
      } satisfies BalanceState;
    }
    case "WITHDRAW": {
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [
          ...state.transactions,
          -action.payload,
        ],
      } satisfies BalanceState;
    }
    default: {
      action satisfies never;
      return state;
    }
  }
}
