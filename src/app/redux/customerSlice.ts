import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export type department = {
  _id: Number,
  firmId: Number,
  name: string,
  address: string,
};



const initialState:department = {
  _id: 2,
  firmId:10,
  name:"Dhaka",
  address:"",
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
   
    addDepartment: (state, action: PayloadAction<department>) => {
      state._id = action.payload._id;
      console.log(state._id);
    },
  },
});

export const { addDepartment } = postSaveSlice.actions;
export default postSaveSlice.reducer;
