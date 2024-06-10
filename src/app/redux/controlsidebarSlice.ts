import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  open: false,
  number:0,
  name:"root",
  role:"",
  customername3:"",
  customername4:"",
  customername5:"",
  customername6:"",
  startnumber:2,
};

const controlsidebarSlice = createSlice({
  name: "controlsidebar",
  initialState,
  reducers: {
    addSidebar: (state, action: PayloadAction<boolean>) => {
      state.open = action.payload;
      console.log(state.open);
    },
    addId: (state, action: PayloadAction<number>) => {
        state.number =action.payload ;
        console.log(state.number);
      },
      addCustomername:(state, action:PayloadAction<string>)=>{
        state.name =action.payload ;
      },
      addRole:(state, action:PayloadAction<string>)=>{
        state.role =action.payload ;
      },
      addCustomer3:(state, action:PayloadAction<string>)=>{
        state.customername3 =action.payload ;
      },
      addCustomer4:(state, action:PayloadAction<string>)=>{
        state.customername4 =action.payload ;
      },
      addCustomer5:(state, action:PayloadAction<string>)=>{
        state.customername5 =action.payload ;
      },
      addStarttraker:(state, action:PayloadAction<number>)=>{
        state.startnumber =action.payload ;
      }
  },
});

export const { addSidebar,addId,addCustomername,addRole, addCustomer3, addCustomer4, addCustomer5, addStarttraker } = controlsidebarSlice.actions;
export default controlsidebarSlice.reducer;
