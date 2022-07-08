import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const userLogin = createAsyncThunk("user", async (userObj, thunkApi) => {
  let res = await axios.post("/user/login", userObj);
  let data = res.data;
  if (data.message === "success") {
    localStorage.setItem("token", data.token);
    return data.userObj;
  }
  if (
    data.message === "invalid username" ||
    data.message === "invalid password"
  ) {
    return thunkApi.rejectWithValue(data);
  }
});

// export const AddToFavourite = createAsyncThunk(
//   "favourites",
//   async (userObj) => {
//     let res = await axios
//       .post("/user/get-favourite-jobs", userObj)
//       .then((res) => res.data);
//     if (res.message === "success") {
//       return res.favouriteJobs;
//     } else {
//       return res.message;
//     }
//   }
// );

// export const ClearFavourites = createAsyncThunk(
//   "clearfavourites",
//   async (userObj) => {
//     await axios
//       .post("/user/delete-favourites", userObj)
//       .then((res) => res.data);
//   }
// );

let userSlice = createSlice({
  name: "user",
  initialState: {
    userObj: {},
    isSuccess: false,
    isLoading: false,
    isError: false,
    errMsg: "",
  },
  reducers: {
    clearLoginStatus: (state) => {
      state.isSuccess = false;
      state.userObj = null;
      state.isError = false;
      state.errMsg = "";
    },
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.isLoading = true;
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userObj = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.isError = false;
      state.errMsg = "";
    },
    [userLogin.rejected]: (state, action) => {
      state.isError = true;
      state.errMsg = action.payload.message;
    },
  },
});

export const { clearLoginStatus } = userSlice.actions;
export default userSlice.reducer;
