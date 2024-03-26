import { RoomService } from "@/services/roomService";
import { useQuery } from "@tanstack/react-query";

const { getFilters } = new RoomService();

export const useFilters = () => {
  const result = useQuery({
    queryKey: ["filters"],
    queryFn: getFilters,
  });

  return {
    data: result.data,
    error: result.error,
    isLoading: result.isLoading,
  };
};
