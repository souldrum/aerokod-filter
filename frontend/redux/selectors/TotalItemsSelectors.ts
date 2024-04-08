import { RootState } from "../store";

export const getTotalItemsSelector = (state: RootState) =>
  state.totalItems.totalItems;
