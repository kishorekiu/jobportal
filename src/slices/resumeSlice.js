import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const UploadOneResume = createAsyncThunk(
  "uploadresume",
  async (userObj) => {
    let res = await axios
      .post("/user/postoneresume", userObj)
      .then((res) => res.data);
    return res.message;
  }
);
export const ResumeStatus = createAsyncThunk("status", async (userObj) => {
  let res = await axios
    .post("/user/resumestatus", userObj)
    .then((res) => res.data);
  return res.message;
});

export const DeleteResume = createAsyncThunk(
  "deleteresume",
  async (userObj) => {
    let res = await axios
      .post("/user/deleteresume", userObj)
      .then((res) => res.data);
    return res.message;
  }
);

export const resumeSlice = createSlice({
  name: "resumeslice",
  initialState: { uploaded: "", currentResumeStatus: "" },
  reducers: {},
  extraReducers: {
    [UploadOneResume.fulfilled]: (state, action) => {
      state.uploaded = action.payload;
    },
    [ResumeStatus.fulfilled]: (state, action) => {
      state.currentResumeStatus = action.payload;
    },
    [DeleteResume.fulfilled]: (state, action) => {
      state.currentResumeStatus = action.payload;
    },
  },
});

export default resumeSlice.reducer;
