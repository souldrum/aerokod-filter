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
  getStateSelector,
} from "@/redux/selectors/FiltersSelectors";
import React from "react";
import { Button } from "../Button/Button";
import { Card } from "../Card/Card";
import { reset } from "@/redux/slices/FiltersSlice";
import { PulseLoader } from "react-spinners";
import cn from "classnames";

export const List: React.FC = () => {
  const project = useAppSelector(getProjectSelector);
  const rooms = useAppSelector(getRoomsSelector);
  const priceMin = useAppSelector(getPriceMinSelector);
  const priceMax = useAppSelector(getPriceMaxSelector);
  const squareMin = useAppSelector(getSquareMinSelector);
  const squareMax = useAppSelector(getSquareMaxSelector);
  const perPage = useAppSelector(getPerPageSelector);
  const page = useAppSelector(getPageSelector);

  const dispatch = useAppDispatch();

  const { data, error, isLoading, meta, isPlaceholder } = useFilteredApartments(
    {
      "f[projects][]": project,
      "f[rooms][]": rooms,
      "f[price][min]": priceMin,
      "f[price][max]": priceMax,
      "f[square][min]": squareMin,
      "f[square][max]": squareMax,
      per_page: 9,
      page: 1,
    }
  );

  if (isLoading)
    return (
      <div className="flex justify-center items-center p-5">
        <PulseLoader color="#2495FE" />
      </div>
    );
  if (error) return <h6>не удалось загрузить список</h6>;

  const remainder = meta!.total - meta!.to;

  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 2xl:grid-cols-3 gap-2.5 lg:gap-x-5 lg:gap-y-12 title-gutter",
        isPlaceholder && "animate-pulse opacity-15"
      )}
    >
      {data!.map((c) => (
        <Card key={c.id} card={c} />
      ))}
      <div className="col-span-full self-end 2xl:col-start-2 2xl:col-end-3 pt-3.5 lg:pt-4">
        {remainder == 0 ? null : (
          <Button className="w-full">
            {showPagination(remainder, meta!.total)}
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
