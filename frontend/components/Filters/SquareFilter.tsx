import { formatRangeData } from "@/format/format";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Square } from "@/services/roomService.types";
import { useSearchParams } from "next/navigation";
import Slider from "rc-slider";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

type Props = {
  square: Square;
};

export const SquareFilter: React.FC<Props> = ({ square }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = square;

  const { setQuery } = useAppRouter();
  const searchParams = useSearchParams();
  const minSquare = searchParams.get("min_square");
  const maxSquare = searchParams.get("max_square");

  const [from, setFrom] = React.useState(
    minSquare ? Number(minSquare) : minRange
  );
  const [to, setTo] = React.useState(maxSquare ? Number(maxSquare) : maxRange);

  React.useEffect(() => {
    if (!minSquare && !maxSquare) {
      setFrom(minRange);
      setTo(maxRange);
    }
  }, [minSquare, maxSquare]);

  const handleChangeSlider = (value: number | number[]) => {
    const [from, to] = value as number[];

    setFrom(from);
    setTo(to);
  };

  const handleChangeComplete = (value: number | number[]) => {
    const [from, to] = value as number[];

    setQuery("min_square", from.toString());
    setQuery("max_square", to.toString());
  };

  return (
    <FilterWithTitle className="relative" title="Задайте площадь, м²">
      <div className="flex justify-between t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <div>от {formatRangeData("square", from)}</div>
        <div className="bg-black-100 opacity-20 pb-px self-center w-5"></div>
        <div>до {formatRangeData("square", to)}</div>
      </div>
      <Slider
        className="absolute bottom-0 w-11/12 self-center flex items-center"
        styles={{
          track: {
            position: "absolute",
            cursor: "pointer",
            zIndex: 2,
            backgroundColor: "#2495FE",
            height: 2,
          },
          rail: { height: 1, backgroundColor: "white" },
          handle: {
            position: "absolute",
            cursor: "grabbing",
            height: 9,
            width: 9,
            borderRadius: 50,
            backgroundColor: "#2495FE",
            touchAction: "none",
          },
        }}
        range
        value={[from, to]}
        min={min}
        max={max}
        onChange={handleChangeSlider}
        onChangeComplete={handleChangeComplete}
      />
    </FilterWithTitle>
  );
};
