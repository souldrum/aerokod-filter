import { RoomService } from "@/services/roomService";
import {
  MetaData,
  Price,
  SearchParams,
  Square,
} from "@/services/roomService.types";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

const { getFilters, getFilteredApartments } = new RoomService();

export const useFilters = (params: SearchParams) => {
  const result = useQuery({
    queryKey: ["filters", params],
    queryFn: () => getFilters(params),
    placeholderData: keepPreviousData,
  });

  const projects = result.data ? result.data.projects : [];
  const rooms = result.data
    ? result.data.rooms.sort((a, b) => a.number - b.number)
    : [];
  const price = result.data ? result.data.price : ({} as Price);
  const square = result.data ? result.data.square : ({} as Square);

  return {
    projects,
    price,
    rooms,
    square,
    filtersData: result.data,
    filtersError: result.error,
    filtersLoading: result.isLoading || !result.isSuccess,
    filtersPlaceholder: result.isPlaceholderData,
  };
};

export const useFilteredApartments = (params: SearchParams) => {
  const result = useQuery({
    queryKey: ["filtered", params],
    queryFn: () => getFilteredApartments(params),
    placeholderData: keepPreviousData,
  });

  const data = result.data ? result.data.data : [];
  const meta = result.data ? result.data.meta : ({} as MetaData);

  return {
    data,
    meta,
    error: result.error,
    isLoading: result.isLoading || !result.isSuccess,
    isPlaceholder: result.isPlaceholderData,
  };
};
