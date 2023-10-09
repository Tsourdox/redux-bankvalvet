import { UserAction } from "./userActions";
import { UserState, initialState } from "./userState";

type KnownAction = UserAction;

export default function userReducer(
  state: UserState = initialState,
  action: KnownAction
) {
  switch (action.type) {
    case "SET_USERNAME": {
      return {
        ...state,
        username: action.payload,
      } satisfies UserState;
    }
    default: {
      action.type satisfies never;
      return state;
    }
  }
}
