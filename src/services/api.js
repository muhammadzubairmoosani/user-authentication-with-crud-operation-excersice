import { createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk action to fetch user list from the API
export const fetchUserList = createAsyncThunk(
  "userList/fetchUserList",
  async () => {
    try {
      const jsonResponse = await fetch("https://reqres.in/api/users?page=1");
      const { data } = await jsonResponse.json();
      localStorage.setItem("userList", JSON.stringify(data));
      return data;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const toggleSortOrder = createAsyncThunk(
  "userList/toggleSortOrder",
  async (field) => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    return field;
  }
);
