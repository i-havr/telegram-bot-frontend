import axios from "axios";
import { notifyError } from "../../components/Notify/NotifyError";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", credentials);
      token.set(data.token);
      return data;
    } catch (error) {
      notifyError(`Неправильна пошта або пароль`);
      return rejectWithValue("Error: ", error.response.status);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      notifyError(`Ой, сталася помилка (${error.response.status})`);
      return rejectWithValue("Error: ", error.response.status);
    }
  }
);

export const refreshCurrentUser = createAsyncThunk(
  "auth/refresh",
  async (_, { getState, rejectWithValue }) => {
    const state = getState();

    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.post("/users/current");

      return data;
    } catch (error) {
      notifyError(error.response.statusText);
      return rejectWithValue("Error: ", error.response.status);
    }
  }
);
