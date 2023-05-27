import { createSlice } from "@reduxjs/toolkit";
import {
  addUser,
  deleteUser,
  fetchUserList,
  toggleSortOrder,
  updateUser,
} from "../../../services";

const userListSlice = createSlice({
  name: "userList",
  initialState: {
    list: [],
    loading: false,
    error: null,
    sortBy: null,
    sortDesc: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUserList.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUserList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(toggleSortOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(toggleSortOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.sortBy = action.payload;
        state.sortDesc = !state.sortDesc;

        const { sortBy } = state;
        if (sortBy === "id") {
          state.list = state.list
            .slice()
            .sort((a, b) => (state.sortDesc ? b.id - a.id : a.id - b.id));
        } else if (sortBy === "name") {
          state.list = state.list
            .slice()
            .sort((a, b) =>
              state.sortDesc
                ? `${b.first_name} ${b.last_name}`.localeCompare(a.name)
                : `${a.first_name} ${a.last_name}`.localeCompare(b.name)
            );
        } else if (sortBy === "email") {
          state.list = state.list
            .slice()
            .sort((a, b) =>
              state.sortDesc
                ? b.email.localeCompare(a.email)
                : a.email.localeCompare(b.email)
            );
        }
      })
      .addCase(toggleSortOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default userListSlice.reducer;
