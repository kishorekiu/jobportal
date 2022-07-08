import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./slices/favouriteSlice";
import jobSlice from "./slices/jobSlice";
import recruiterSlice from "./slices/recruiterSlice";
import resumeSlice from "./slices/resumeSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    data: userSlice,
    job: jobSlice,
    favourite: favouriteSlice,
    resume: resumeSlice,
    recruiter: recruiterSlice,
  },
});
