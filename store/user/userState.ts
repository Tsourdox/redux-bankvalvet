export interface UserState {
  name: string;
  savingsGoal: number;
}

export const initialState: UserState = {
  name: "My",
  savingsGoal: 5000,
};
