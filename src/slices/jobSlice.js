import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToApplied = createAsyncThunk("addapplid", async (userObj) => {
  let res = await axios
    .post("/user/get-applied-jobs", userObj)
    .then((res) => res.data);
  if (res.message === "success") {
    return res.payload;
  } else {
    return res.message;
  }
});

export const ClearApplied = createAsyncThunk(
  "clearApplied",
  async (userObj) => {
    await axios.post("/user/delete-applied", userObj).then((res) => res.data);
  }
);
export let jobSlice = createSlice({
  name: "jobslice",
  initialState: {
    appliedJobs: [],
  },
  reducres: {},
  extraReducers: {
    [AddToApplied.fulfilled]: (state, action) => {
      state.appliedJobs = action.payload;
    },
    [ClearApplied.fulfilled]: (state, action) => {
      state.appliedJobs = [];
    },
  },
});

export default jobSlice.reducer;
