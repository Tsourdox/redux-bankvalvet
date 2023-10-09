// --- ACTIONS ---
interface DepositAction {
  type: "DEPOSIT";
  payload: number;
}

interface WithdrawAction {
  type: "WITHDRAW";
  payload: number;
}

// Alla actions som den här reducern känner till.
type KnownAction = DepositAction | WithdrawAction;
// --- ACTIONS ---

// --- STATE ---
interface State {
  balance: number;
  transactions: number[];
}

const initialState: State = {
  balance: 0,
  transactions: [],
};
// --- STATE ---

// --- REDUCER ---
export default function balanceReducer(
  state: State = initialState,
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
      } satisfies State;
    }
    case "WITHDRAW": {
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [
          ...state.transactions,
          -action.payload,
        ],
      } satisfies State;
    }
    default: {
      action satisfies never;
      return state;
    }
  }
}
// --- REDUCER ---
