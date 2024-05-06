import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import departmentSlice from "./departmentSlice";
import customerSlice from "./customerSlice";
import locationSlice from "./locationSlice";
import statusSlice from "./statusSlice";


const rootReducer = combineReducers({
    departmentSlice:departmentSlice,
    customerSlice:customerSlice,
    locationSlice:locationSlice,
    statusSlice:statusSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
