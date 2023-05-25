import { configureStore } from "@reduxjs/toolkit";
import { appReducer } from "./appSlice";
import { saladReducer } from "./saladSlice";

export const store = configureStore({
    reducer: {
        app: appReducer,
        salad: saladReducer
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>