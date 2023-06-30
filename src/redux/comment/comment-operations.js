import axios from "axios";
import { notifyError } from "../../components/Notify/NotifyError";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "http://localhost:3000";

export const log = createAsyncThunk(
  "comment/log",
  async (comment, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/log/message", comment);
      return data;
    } catch (error) {
      notifyError(`Неправильна пошта або пароль`);
      return rejectWithValue("Error: ", error.response.status);
    }
  }
);
