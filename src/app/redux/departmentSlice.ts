import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type firm = {
  _id: Number;
  name:string;
  address:string;
};

const initialState: firm = {
  _id: 1000,
  name:"Dinajpur",
  address:"",
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Number>) => {
      state._id = action.payload;
      console.log(state._id);
    },
  },
});

export const { addPost } = postSaveSlice.actions;
export default postSaveSlice.reducer;
