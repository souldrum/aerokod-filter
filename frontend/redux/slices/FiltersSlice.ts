import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type QueryFilters = {
  project: number;
  rooms: number;
  priceMin?: number;
  priceMax?: number;
  squareMin?: number;
  squareMax?: number;
  perPage?: number;
  page?: number;
};

const initialState: QueryFilters = {
  project: 1,
  rooms: 0,
  priceMin: 2036656,
  priceMax: 14993187,
  squareMin: 20,
  squareMax: 100,
  perPage: 9,
  page: 1,
};

export const FiltersSlice = createSlice({
  name: "FiltersSlice",
  initialState,
  reducers: {
    setProject(state, { payload }: PayloadAction<number>) {
      state.project = payload;
    },
    setRooms(state, { payload }: PayloadAction<number>) {
      state.rooms = payload;
    },
    setPriceMin(state, { payload }: PayloadAction<number>) {
      state.priceMin = payload;
    },
    setPriceMax(state, { payload }: PayloadAction<number>) {
      state.priceMax = payload;
    },
    setSquareMin(state, { payload }: PayloadAction<number>) {
      state.squareMin = payload;
    },
    setSquareMax(state, { payload }: PayloadAction<number>) {
      state.squareMax = payload;
    },
    setPerPage(state, { payload }: PayloadAction<number>) {
      state.perPage = payload;
    },
    setPage(state, { payload }: PayloadAction<number>) {
      state.page = payload;
    },
    reset(state) {
      state.project = 0;
      state.rooms = 1;
      state.priceMin = 2036656;
      state.priceMax = 14993187;
      state.squareMin = 20;
      state.squareMax = 100;
      state.perPage = 9;
      state.page = 1;
    },
  },
});

export default FiltersSlice.reducer;
export const {
  setProject,
  setRooms,
  setPriceMin,
  setPriceMax,
  setSquareMin,
  setSquareMax,
  setPerPage,
  setPage,
  reset,
} = FiltersSlice.actions;
