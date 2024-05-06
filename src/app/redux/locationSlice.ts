import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type customer={
  _id: Number,
  departmentid: Number,
  name: string,
  address:string,
}

 type status={
  open:boolean,
 }

const initialState:customer= {
  _id: 3,
  departmentid:30,
  name:"germany",
  address:"",
  
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
   
    addCustomer: (state, action: PayloadAction<customer>) => {
      state._id = action.payload._id;
      console.log(state._id);
    },
  },
});

export const { addCustomer } = postSaveSlice.actions;
export default postSaveSlice.reducer;
