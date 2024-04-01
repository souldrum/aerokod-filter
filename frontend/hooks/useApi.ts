import { RoomService } from "@/services/roomService";
import { FilterParams } from "@/services/roomService.types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const { getFilters, getApartments, getFilteredApartments } = new RoomService();

export const useFilters = (params: FilterParams) => {
  const result = useQuery({
    queryKey: ["filters", params],
    queryFn: () => getFilters(params),
    placeholderData: keepPreviousData,
    enabled: !!params,
  });

  return {
    data: result.data?.data,
    meta: result.data?.meta,
    error: result.error,
    isLoading: result.isLoading,
    isPlaceholder: result.isPlaceholderData,
  };
};

export const useFilteredApartments = (params: FilterParams) => {
  const result = useQuery({
    queryKey: ["filtered", params],
    queryFn: () => getFilteredApartments(params),
    placeholderData: keepPreviousData,
    enabled: !!params,
  });

  return {
    data: result.data?.data,
    meta: result.data?.meta,
    error: result.error,
    isLoading: result.isLoading,
    isPlaceholder: result.isPlaceholderData,
  };
};
