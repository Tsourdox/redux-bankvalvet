import {
  PayloadAction,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

interface UserState {
  name: string;
  savingsGoal: number;
  isNameDay: boolean;
}

const initialState: UserState = {
  name: "My",
  savingsGoal: 100,
  isNameDay: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setSavingsGoal: (
      state,
      action: PayloadAction<number>
    ) => {
      state.savingsGoal = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(setName.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.isNameDay = action.payload.isNameDay;
    });
  },
});

export const setName = createAsyncThunk<
  {
    name: string;
    isNameDay: boolean;
  },
  string
>("user/setName", async (name, thunkAPI) => {
  const response = await fetch(
    "https://sholiday.faboul.se/dagar/v2.1/2023/10/13"
  );
  const result = await response.json();
  const names = result.dagar[0].namnsdag as string[];

  return { name, isNameDay: names.includes(name) };
});

export const { setSavingsGoal } = userSlice.actions;
export const userReducer = userSlice.reducer;
