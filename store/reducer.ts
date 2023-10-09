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
}

const initialState: State = {
  balance: 100,
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
      };
    }
    case "WITHDRAW": {
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    }
    default: {
      action satisfies never;
      return state;
    }
  }
}
// --- REDUCER ---
