import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface AppState {
  name: string;
  orderId: number | null;
}

const initialState: AppState = {
  name: "",
  orderId: null,
};

const appSlice = createSlice({
  initialState,
  name: "app",
  reducers: {
    setOrderName: (state, action: PayloadAction<{ name: string }>) => {
      state.name = action.payload.name;
    },
    setOrderId: (state, action: PayloadAction<{ id: number }>) => {
      state.orderId = action.payload.id;
    },
  },
});

export const { setOrderName, setOrderId } = appSlice.actions;
export const appReducer = appSlice.reducer;
