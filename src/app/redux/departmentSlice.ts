import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type firm = {
  _id: Number;
  name: string;
  address: string;
};


const initialState: firm = {
  _id: 1,
  name: "Dinajpur",
  address: "",
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
    addFirm: (state, action: PayloadAction<firm>) => {
      state._id = action.payload._id;
      console.log(state._id);
    },
   
  },
});

export const { addFirm} = postSaveSlice.actions;
export default postSaveSlice.reducer;
