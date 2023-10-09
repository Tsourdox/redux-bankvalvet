export interface SetUsernameAction {
  type: "SET_USERNAME";
  payload: string;
}

export type UserAction = SetUsernameAction;
