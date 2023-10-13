import {
  PayloadAction,
  createSlice,
} from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "./utils";

interface UserState {
  name: string;
  savingsGoal: number;
  isNameDay: boolean;
  loading: "idle" | "pending";
  errorMessage?: string;
}

const initialState: UserState = {
  name: "My",
  savingsGoal: 100,
  isNameDay: false,
  loading: "idle",
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
    builder.addCase(setName.pending, (state, action) => {
      state.loading = "pending";
    });
    builder.addCase(setName.fulfilled, (state, action) => {
      state.name = action.payload.name;
      state.isNameDay = action.payload.isNameDay;
      state.loading = "idle";
    });
    builder.addCase(setName.rejected, (state, action) => {
      state.loading = "idle";
      state.errorMessage = action.payload;
    });
  },
});

export const setName = createAppAsyncThunk<
  {
    name: string;
    isNameDay: boolean;
  },
  string
>("user/setName", async (name, thunkAPI) => {
  try {
    const response = await fetch(
      "https://sholiday.faboul.se/dagar/v2.1/2023/10/13"
    );
    const result = await response.json();
    const names = result.dagar[0].namnsdag as string[];
    return { name, isNameDay: names.includes(name) };
  } catch (error: any) {
    console.error(error);
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const { setSavingsGoal } = userSlice.actions;
export const userReducer = userSlice.reducer;
