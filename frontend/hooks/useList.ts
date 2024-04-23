import React from "react";
import { useFilteredApartments } from "./useApi";
import { useAppParams } from "./useAppParams";
import { useAppDispatch } from "./useRedux";
import { useAppRouter } from "./useAppRouter";
import { setTotalItems } from "@/redux/slices/TotalItemsSlice";

export const useList = () => {
  const minPerPage = 9;

  const dispatch = useAppDispatch();
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
  const [perPage, setPerPage] = React.useState(
    perPageParams ? Number(perPageParams) : minPerPage
  );

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      "f[projects][]": projectParams ? Number(projectParams) : undefined,
      "f[rooms][]": roomParams.length ? roomParams : undefined,
      "f[price][min]": minPriceParams ? Number(minPriceParams) : undefined,
      "f[price][max]": maxPriceParams ? Number(maxPriceParams) : undefined,
      "f[square][min]": minSquareParams ? Number(minSquareParams) : undefined,
      "f[square][max]": maxSquareParams ? Number(maxSquareParams) : undefined,
      per_page: perPage,
      page: 1,
    }
  );

  React.useEffect(() => {
    if (isLoading) return;

    // dispatch(setTotalItems(meta.total));
    setPerPage(minPerPage);
  }, [meta.total]);

  // React.useEffect(() => {
  //   if (isPlaceholder) return;

  //   if (perPage > minPerPage) setQuery("per_page", perPage.toString());
  //   if (perPage > meta.total) setQuery("per_page", meta.total.toString());
  // }, [meta.total, isPlaceholder, perPage]);

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
