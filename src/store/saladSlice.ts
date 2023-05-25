import {
  PayloadAction,
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { fetchToppings } from "../services/saladService";
import { Topping } from "../models/topping.model";
import { RootState } from "./store";

export interface SaladState {
  allToppings: Topping[];
  chosenToppings: Topping[];
  dressing: string;
  loading: boolean;
}

const initialState: SaladState = {
  allToppings: [],
  chosenToppings: [],
  dressing: "",
  loading: false,
};

export const loadToppings = createAsyncThunk("salad/loadToppings", async () => {
  const toppings = await fetchToppings();
  return { toppings };
});

const saladSlice = createSlice({
  initialState,
  name: "salad",
  reducers: {
    chooseTopping: (state, action: PayloadAction<Topping>) => {
      state.chosenToppings = [...state.chosenToppings, action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadToppings.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadToppings.fulfilled, (state, action) => {
        state.loading = false;
        state.allToppings = action.payload.toppings;
      })
      .addCase(loadToppings.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        console.error("Error while fetching toppings");
      });
  },
});

export const selectTotalPrice = (state: RootState) => {
  console.log("selectTotalPrice");
  return state.salad.chosenToppings.reduce((sum, topping) => {
    return sum + topping.price;
  }, 0);
};

const selectChosenToppings = (state: RootState) => state.salad.chosenToppings;
export const selectTotalPriceMemo = createSelector(
  selectChosenToppings,
  (toppings) => {
    console.log("selectTotalPriceMemo");
    return toppings.reduce((sum, topping) => {
      return sum + topping.price;
    }, 0);
  }
);

export const { chooseTopping } = saladSlice.actions;
export const saladReducer = saladSlice.reducer;
