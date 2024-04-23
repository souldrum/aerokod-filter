import { RootState } from "../store";

export const getProjectSelector = (state: RootState) => state.filters.project;
export const getRoomsSelector = (state: RootState) => state.filters.rooms;
export const getPriceMinSelector = (state: RootState) => state.filters.priceMin;
export const getPriceMaxSelector = (state: RootState) => state.filters.priceMax;
export const getSquareMinSelector = (state: RootState) =>
  state.filters.squareMin;
export const getSquareMaxSelector = (state: RootState) =>
  state.filters.squareMax;
export const getPerPageSelector = (state: RootState) => state.filters.perPage;
export const getPageSelector = (state: RootState) => state.filters.page;
export const getStateSelector = (state: RootState) => state;
