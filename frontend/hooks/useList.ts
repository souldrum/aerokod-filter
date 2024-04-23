import React from "react";
import { useFilteredApartments } from "./useApi";
import { useAppParams } from "./useAppParams";
import { useAppRouter } from "./useAppRouter";

export const useList = () => {
  const minPerPage = 9;

  const { setQuery } = useAppRouter();

  const {
    maxPriceParams,
    maxSquareParams,
    minPriceParams,
    minSquareParams,
    perPageParams,
    projectParams,
    roomParams,
  } = useAppParams();

  //проверку на пустые строки убрать в апи
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
