import { useAppParams } from "@/hooks/useAppParams";
import { Square } from "@/services/roomService.types";
import React from "react";
import { Range } from "./Range";

type Props = {
  square: Square;
};

export const SquareFilter: React.FC<Props> = ({ square }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = square;

  const { minSquareParams, maxSquareParams } = useAppParams();

  return (
    <Range
      name="square"
      title="Задайте площадь, м²"
      min={min}
      max={max}
      minRange={minRange}
      maxRange={maxRange}
      minParams={minSquareParams}
      maxParams={maxSquareParams}
    />
  );
};
