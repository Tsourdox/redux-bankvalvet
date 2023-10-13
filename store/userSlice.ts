import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";

interface UserState {
  name: string;
  savingsGoal: number;
}

const initialState: UserState = {
  name: "My",
  savingsGoal: 100,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    setSavingsGoal: (
      state,
      action: PayloadAction<number>
    ) => {
      state.savingsGoal = action.payload;
    },
  },
});

export const { setName, setSavingsGoal } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
