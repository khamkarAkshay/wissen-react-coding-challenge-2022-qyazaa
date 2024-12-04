import { createSlice } from "@reduxjs/toolkit";
import { getUserListService } from "./user.thunk";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    userList: [],
    loading: false,
    error: null,
    total: 0,
    total_pages: 0,
    page: 0,
    per_page: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserListService.pending, (state) => {
        state.userList = [];
        state.loading = true;
        state.error = null;
        state.total = 0;
        state.total_pages = 0;
        state.page = 0;
        state.per_page = 0;
      })
      .addCase(getUserListService.fulfilled, (state, action) => {
        state.userList = [...action.payload?.data];
        state.loading = false;
        state.error = null;
        state.total = action.payload?.total;
        state.total_pages = action.payload?.total_pages;
        state.page = action.payload?.page;
        state.per_page = action.payload?.per_page;
      })
      .addCase(getUserListService.rejected, (state, action) => {
        state.userList = [];
        state.loading = true;
        state.error = action.error.message;
        state.total = 0;
        state.total_pages = 0;
        state.page = 0;
        state.per_page = 0;
      });
  },
});

export default usersSlice.reducer;
