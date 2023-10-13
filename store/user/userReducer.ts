import { UserAction } from "./userActions";
import { UserState, initialState } from "./userState";

type KnownAction = UserAction;

export default function userReducer(
  state: UserState = initialState,
  action: KnownAction
) {
  switch (action.type) {
    case "SET_NAME": {
      return {
        ...state,
        name: action.payload,
      } satisfies UserState;
    }
    case "SET_SAVINGS_GOAL": {
      return {
        ...state,
        savingsGoal: action.payload,
      };
    }
    default: {
      action satisfies never;
      return state;
    }
  }
}
