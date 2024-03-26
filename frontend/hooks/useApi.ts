import { RoomService } from "@/services/roomService";
import { useQuery } from "@tanstack/react-query";

const { getFilters } = new RoomService();

export const useFilters = () => {
  const result = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  return {
    result,
    error: result.error,
    loading: result.isLoading,
    projects: result.data?.projects,
    price: result.data?.price,
    rooms: result.data?.rooms,
    square: result.data?.square,
  };
};
