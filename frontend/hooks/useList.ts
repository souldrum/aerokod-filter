import React from "react";
import { useFilteredApartments } from "./useApi";
import { useAppParams } from "./useAppParams";

export const useList = () => {
  const minPerPage = 9;

  const {
    maxPriceParams,
    maxSquareParams,
    minPriceParams,
    minSquareParams,
    projectParams,
    roomParams,
  } = useAppParams();

  const [perPage, setPerPage] = React.useState(minPerPage);

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      projects: projectParams,
      rooms: roomParams,
      priceMin: minPriceParams,
      priceMax: maxPriceParams,
      squareMin: minSquareParams,
      squareMax: maxSquareParams,
      perPage: perPage.toString(),
    }
  );

  React.useEffect(() => {
    setPerPage(minPerPage);
  }, [meta.total]);

  return {
    data,
    error,
    isLoading,
    meta,
    isPlaceholder,
    minPerPage,
    perPage,
    setPerPage,
  };
};
