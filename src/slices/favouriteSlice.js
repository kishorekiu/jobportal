import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AddToFavourite = createAsyncThunk(
  "addfavourite",
  async (userObj) => {
    let res = await axios
      .post("/user/get-favourite-jobs", userObj)
      .then((res) => res.data);
    if (res.message === "success") {
      return res.payload;
    } else {
      return res.message;
    }
  }
);

export const ClearFavourites = createAsyncThunk(
  "clearfavourites",
  async (userObj) => {
    let res = await axios
      .post("/user/delete-favourites", userObj)
      .then((res) => res.data);
    console.log(res);
  }
);
export let favouriteSlice = createSlice({
  name: "favouriteslice",
  initialState: {
    favouriteJobs: [],
  },
  reducres: {},
  extraReducers: {
    [AddToFavourite.fulfilled]: (state, action) => {
      state.favouriteJobs = action.payload;
    },
    [ClearFavourites.fulfilled]: (state, action) => {
      state.favouriteJobs = [];
    },
  },
});

export default favouriteSlice.reducer;
