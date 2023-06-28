import { createAsyncThunk } from "@reduxjs/toolkit";

export const addUser = createAsyncThunk("userList/addUser", async (user) => {
  // Save the user to localStorage
  const userList = JSON.parse(localStorage.getItem("userList") || "[]");
  const updatedUserList = [...userList, user];
  localStorage.setItem("userList", JSON.stringify(updatedUserList));
  return updatedUserList;
});

export const updateUser = createAsyncThunk(
  "userList/updateUser",
  async (user) => {
    // Update the user in localStorage
    console.log("method user", user);
    const userList = JSON.parse(localStorage.getItem("userList") || "[]");
    const updatedUserList = userList.map((u) => (u.id === user.id ? user : u));
    localStorage.setItem("userList", JSON.stringify(updatedUserList));
    return updatedUserList;
  }
);

export const deleteUser = createAsyncThunk(
  "userList/deleteUser",
  async (userId) => {
    // Delete the user from localStorage
    const userList = JSON.parse(localStorage.getItem("userList") || "[]");
    const updatedUserList = userList.filter((user) => user.id !== userId);
    localStorage.setItem("userList", JSON.stringify(updatedUserList));
    return updatedUserList;
  }
);
