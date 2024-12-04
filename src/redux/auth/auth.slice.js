import { createSlice } from "@reduxjs/toolkit";
import { loginService } from "./auth.thunk";

const initialState = { oken: "", loading: false, error: null };

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearData: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginService.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.token = "";
      })
      .addCase(loginService.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload?.token;
        state.error = null;
      })
      .addCase(loginService.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.token = "";
      });
  },
});

export const clearAuthStateAction = authSlice.actions.clearData;

export default authSlice.reducer;
