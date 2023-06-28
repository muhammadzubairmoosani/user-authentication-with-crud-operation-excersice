import { createAsyncThunk } from "@reduxjs/toolkit";
import firebase from "firebase/compat/app";

const checkUserLoggedIn = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebase.auth().onAuthStateChanged(
      (user) => {
        unsubscribe(); // Unsubscribe from the listener after receiving the first result
        resolve(user);
      },
      (error) => {
        reject(error);
      }
    );
  });
};

export const checkAuthState = createAsyncThunk(
  "auth/checkAuthState",
  async () => {
    try {
      const user = await checkUserLoggedIn();
      return user.email;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signIn",
  async ({ email, password }) => {
    try {
      const { user } = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      return user.email;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const signUp = createAsyncThunk(
  "auth/signUp",
  async ({ email, password }) => {
    try {
      const { user } = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, password);
      return user.email;
    } catch (error) {
      throw new Error(error.message);
    }
  }
);

export const signOut = createAsyncThunk("auth/signOut", async () => {
  try {
    await firebase.auth().signOut();
    return null;
  } catch (error) {
    throw new Error(error.message);
  }
});
