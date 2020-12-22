import { Action, combineReducers, configureStore, ThunkAction } from "@reduxjs/toolkit";
import bugSlice from "../features/bug-tracker/bug-slice";

export const rootReducer = combineReducers({
    bugSlice: bugSlice
});
  
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>

export default store;