export interface SetNameAction {
  type: "SET_NAME";
  payload: string;
}

export interface SetSavingsGoalAction {
  type: "SET_SAVINGS_GOAL";
  payload: number;
}

export type UserAction =
  | SetNameAction
  | SetSavingsGoalAction;
