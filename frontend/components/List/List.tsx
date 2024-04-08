import { useFilteredApartments } from "@/hooks/useApi";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import {
  getPageSelector,
  getPerPageSelector,
  getPriceMaxSelector,
  getPriceMinSelector,
  getProjectSelector,
  getRoomsSelector,
  getSquareMaxSelector,
  getSquareMinSelector,
} from "@/redux/selectors/FiltersSelectors";
import cn from "classnames";
import React from "react";
import { PulseLoader } from "react-spinners";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { setTotalItems } from "@/redux/slices/TotalItemsSlice";

export const List: React.FC = () => {
  const project = useAppSelector(getProjectSelector);
  const rooms = useAppSelector(getRoomsSelector);
  const priceMin = useAppSelector(getPriceMinSelector);
  const priceMax = useAppSelector(getPriceMaxSelector);
  const squareMin = useAppSelector(getSquareMinSelector);
  const squareMax = useAppSelector(getSquareMaxSelector);
  const dispatch = useAppDispatch();

  const minPerPage = 9;

  const [perPage, setPerPage] = React.useState(minPerPage);

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      "f[projects][]": project,
      "f[rooms][]": rooms,
      "f[price][min]": priceMin,
      "f[price][max]": priceMax,
      "f[square][min]": squareMin,
      "f[square][max]": squareMax,
      per_page: perPage,
      page: 1,
    }
  );

  React.useEffect(() => {
    if (meta) dispatch(setTotalItems(meta.total));
  }, [meta?.total]);

  React.useEffect(() => {
    setPerPage(minPerPage);
  }, [project, rooms, priceMin, priceMax, squareMin, squareMax]);

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
              showPagination(remainder, meta!.total, minPerPage)
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

const showPagination = (
  remainder: number,
  total: number,
  perPage: number = 9
) => {
  const result = remainder < perPage ? remainder : perPage;
  return `Показать ещё ${result} из ${total}`;
};
