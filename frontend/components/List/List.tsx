import { useFilteredApartments } from "@/hooks/useApi";
import { useAppDispatch } from "@/hooks/useRedux";
import { setTotalItems } from "@/redux/slices/TotalItemsSlice";
import cn from "classnames";
import { useSearchParams } from "next/navigation";
import React from "react";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";

export const List: React.FC = () => {
  const searchParams = useSearchParams();
  const roomParams = searchParams.get("rooms");
  const projectParams = searchParams.get("project");
  const minPriceParams = searchParams.get("min_price");
  const maxPriceParams = searchParams.get("max_price");
  const minSquareParams = searchParams.get("min_square");
  const maxSquareParams = searchParams.get("max_square");

  const dispatch = useAppDispatch();

  const minPerPage = 9;

  const [perPage, setPerPage] = React.useState(minPerPage);

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      "f[projects][]": projectParams ? Number(projectParams) : undefined,
      "f[rooms][]": roomParams ? Number(roomParams) : undefined,
      "f[price][min]": minPriceParams ? Number(minPriceParams) : undefined,
      "f[price][max]": maxPriceParams ? Number(maxPriceParams) : undefined,
      "f[square][min]": minSquareParams ? Number(minSquareParams) : undefined,
      "f[square][max]": maxSquareParams ? Number(maxSquareParams) : undefined,
      per_page: perPage,
      page: 1,
    }
  );

  React.useEffect(() => {
    if (meta) dispatch(setTotalItems(meta.total));
  }, [meta?.total]);

  React.useEffect(() => {
    setPerPage(minPerPage);
  }, [
    projectParams,
    roomParams,
    minPriceParams,
    maxPriceParams,
    minSquareParams,
    maxSquareParams,
  ]);

  if (isLoading)
    return (
      <div className="flex justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );
  if (error) return <h6>не удалось загрузить список</h6>;

  const remainder = meta!.total - meta!.to;

  return (
    <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-2.5 lg:gap-x-5 lg:gap-y-12 title-gutter">
      {data!.map((c) => (
        <Card
          className={cn(isPlaceholder && "animate-pulse opacity-15")}
          key={c.id}
          card={c}
        />
      ))}
      <div className="col-span-full self-end 2xl:col-start-2 2xl:col-end-3 pt-3.5 lg:pt-4">
        {remainder == 0 ? null : (
          <Button
            className="w-full"
            onClick={() => setPerPage((prev) => prev + 9)}
            disabled={isPlaceholder}
          >
            {isPlaceholder ? (
              <div className="flex justify-center items-center">
                <PulseLoader color="#fff" />
              </div>
            ) : (
              showPagination(remainder, minPerPage)
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

const showPagination = (remainder: number, perPage: number) => {
  const result = remainder < perPage ? remainder : perPage;
  return `Показать ещё ${result} из ${remainder}`;
};
