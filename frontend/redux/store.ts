import { configureStore } from "@reduxjs/toolkit";
import FiltersSlice from "./slices/FiltersSlice";
import TotalItemsSlice from "./slices/TotalItemsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      filters: FiltersSlice,
      totalItems: TotalItemsSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
