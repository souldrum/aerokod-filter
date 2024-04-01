import { combineReducers, configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "./slices/FiltersSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: FiltersSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
