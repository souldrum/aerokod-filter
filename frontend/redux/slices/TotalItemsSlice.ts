import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TotalItems = {
  totalItems: number;
};

const initialState: TotalItems = {
  totalItems: 0,
};

export const TotalItemsSlice = createSlice({
  name: "TotalItemsSlice",
  initialState,
  reducers: {
    setTotalItems(state, { payload }: PayloadAction<number>) {
      state.totalItems = payload;
    },
  },
});

export default TotalItemsSlice.reducer;
export const { setTotalItems } = TotalItemsSlice.actions;
