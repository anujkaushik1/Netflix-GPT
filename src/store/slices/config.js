import { createSlice } from "@reduxjs/toolkit";

const config = createSlice({
  name: "config",
  initialState: {
    selectedLanguage: "en",
  },
  reducers: {
    updateLangugae: (state, action) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { updateLangugae } = config.actions;
export default config.reducer;
