import { useFilters } from "./useApi";
import { useAppParams } from "./useAppParams";

export const useFiltersData = () => {
  const {
    maxPriceParams,
    maxSquareParams,
    minPriceParams,
    minSquareParams,
    perPageParams,
    projectParams,
    roomParams,
  } = useAppParams();

  const {
    filtersLoading,
    filtersError,
    filtersPlaceholder,
    projects,
    price,
    square,
    rooms,
  } = useFilters({
    projects: projectParams,
    rooms: roomParams,
    priceMin: minPriceParams,
    priceMax: maxPriceParams,
    squareMin: minSquareParams,
    squareMax: maxSquareParams,
  });

  return {
    filtersLoading,
    filtersError,
    filtersPlaceholder,
    projects,
    price,
    square,
    rooms,
  };
};
