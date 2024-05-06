import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
    addStatus: (state, action: PayloadAction<boolean>) => {
      state.open = true;
      console.log(state.open);
    },
  },
});

export const { addStatus } = postSaveSlice.actions;
export default postSaveSlice.reducer;
