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
    "f[projects][]": projectParams ? Number(projectParams) : undefined,
    "f[rooms][]": roomParams.length ? roomParams : undefined,
    "f[price][min]": minPriceParams ? Number(minPriceParams) : undefined,
    "f[price][max]": maxPriceParams ? Number(maxPriceParams) : undefined,
    "f[square][min]": minSquareParams ? Number(minSquareParams) : undefined,
    "f[square][max]": maxSquareParams ? Number(maxSquareParams) : undefined,
    // per_page: perPageParams ? Number(perPageParams) : undefined,
    // page: 1,
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
