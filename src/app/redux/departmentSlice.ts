import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type firm = {
  _id: Number;
  name: string;
  address: string;
  firmId:number;
  departmentId:number;
  customerId:number;
  locationId:number;
  locationdetail:string[];
  isaddMoreSidebar:boolean;
};


const initialState: firm = {
  _id: 1,
  name: "Dinajpur",
  address: "",
  firmId:0,
  departmentId:0,
  customerId:0,
  locationId:0,
  locationdetail:[],
  isaddMoreSidebar:false,
};

const postSaveSlice = createSlice({
  name: "posting",
  initialState,
  reducers: {
    addFirm: (state, action: PayloadAction<firm>) => {
      state._id = action.payload._id;
      console.log(state._id);
    },
    addFirmId: (state, action: PayloadAction<number>) => {
      state.firmId = action.payload;
    
    },

    addDepartmentId: (state, action: PayloadAction<number>) => {
      state.departmentId = action.payload;
    
    },

    addCustomerId: (state, action: PayloadAction<number>) => {
      state.customerId = action.payload;
    
    },
    addLocationId: (state, action: PayloadAction<number>) => {
      state.locationId = action.payload;
    
    },
    addLocationdetail: (state, action: PayloadAction<string[]>) => {
      state.locationdetail = action.payload;
    
    },
    addMoreSidebar: (state, action: PayloadAction<boolean>) => {
      state.isaddMoreSidebar = action.payload;
    
    },
    
  },
});

export const { addFirm, addFirmId, addDepartmentId, addCustomerId, addLocationId,addLocationdetail,addMoreSidebar} = postSaveSlice.actions;
export default postSaveSlice.reducer;
