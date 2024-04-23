import { useSearchParams } from "next/navigation";

export const useAppParams = () => {
  const searchParams = useSearchParams();

  const roomParams = searchParams.getAll("rooms");
  const projectParams = searchParams.get("project");
  const minPriceParams = searchParams.get("min_price");
  const maxPriceParams = searchParams.get("max_price");
  const minSquareParams = searchParams.get("min_square");
  const maxSquareParams = searchParams.get("max_square");
  const perPageParams = searchParams.get("per_page");

  return {
    roomParams,
    projectParams,
    minPriceParams,
    maxPriceParams,
    minSquareParams,
    maxSquareParams,
    perPageParams,
  };
};
