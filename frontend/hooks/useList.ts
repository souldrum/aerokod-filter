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
      "f[projects][]": projectParams ? Number(projectParams) : undefined,
      "f[rooms][]": roomParams.length ? roomParams : undefined,
      "f[price][min]": minPriceParams ? Number(minPriceParams) : undefined,
      "f[price][max]": maxPriceParams ? Number(maxPriceParams) : undefined,
      "f[square][min]": minSquareParams ? Number(minSquareParams) : undefined,
      "f[square][max]": maxSquareParams ? Number(maxSquareParams) : undefined,
      per_page: perPageParams ? Number(perPageParams) : perPage,
      page: 1,
    }
  );

  React.useEffect(() => {
    setPerPage(minPerPage);
  }, [meta.total]);

  // React.useEffect(() => {
  //   if (isPlaceholder) return;
  //   if (perPage > meta.total) setQuery("per_page", meta.total.toString());

  //   if (perPage > minPerPage) setQuery("per_page", perPage.toString());
  // }, [perPage, meta.total]);

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
