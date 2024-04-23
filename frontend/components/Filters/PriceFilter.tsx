import { useAppParams } from "@/hooks/useAppParams";
import { Price } from "@/services/roomService.types";
import React from "react";
import { Range } from "./Range";

type Props = {
  price: Price;
};

export const PriceFilter: React.FC<Props> = ({ price }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = price;

  const { minPriceParams, maxPriceParams } = useAppParams();

  return (
    <Range
      name="price"
      title="Стоимость"
      min={min}
      max={max}
      minRange={minRange}
      maxRange={maxRange}
      minParams={minPriceParams}
      maxParams={maxPriceParams}
    />
  );
};
