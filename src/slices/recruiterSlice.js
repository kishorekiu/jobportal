import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const PostOneJob = createAsyncThunk("postonejob", async (jobObj) => {
  const response = await axios
    .post("/user/postonejob", jobObj)
    .then((res) => res.data);
  console.log(response);
  if (response.message === "success") {
    return response.message;
  }
});

export let recruiterSlice = createSlice({
  name: "recruiter",
  initialState: {
    jobStatus: "",
  },
  extraReducers: {
    [PostOneJob.fulfilled]: (state, action) => {
      state.jobStatus = action.payload;
    },
  },
});
export default recruiterSlice.reducer;
