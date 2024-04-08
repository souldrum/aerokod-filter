import { RoomService } from "@/services/roomService";
import { FilterParams } from "@/services/roomService.types";
import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

const { getFilters, getFilteredApartments } = new RoomService();

export const useFilters = (params: FilterParams) => {
  const result = useQuery({
    queryKey: ["filters", params],
    queryFn: () => getFilters(params),
    placeholderData: keepPreviousData,
  });

  return {
    projects: result.data?.projects,
    price: result.data?.price,
    rooms: result.data?.rooms,
    square: result.data?.square,
    filtersData: result.data,
    filtersError: result.error,
    filtersLoading: result.isLoading,
    filtersPlaceholder: result.isPlaceholderData,
  };
};

export const useFilteredApartments = (params: FilterParams) => {
  const queryClient = useQueryClient();

  const result = useQuery({
    queryKey: ["filtered", params],
    queryFn: () => getFilteredApartments(params),
    placeholderData: keepPreviousData,
  });

  return {
    data: result.data?.data,
    meta: result.data?.meta,
    error: result.error,
    isLoading: result.isLoading,
    isPlaceholder: result.isPlaceholderData,
  };
};
