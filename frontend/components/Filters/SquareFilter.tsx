import React from "react";
import { Range } from "./Range";
import { Square } from "@/services/roomService.types";
import { setSquareMax, setSquareMin } from "@/redux/slices/FiltersSlice";
import { useAppDispatch } from "@/hooks/useRedux";
import { FilterWithTitle } from "./FilterWithTitle";
import { formatRangeData } from "@/format/format";
import Slider from "rc-slider";
import { useAppRouter } from "@/hooks/useAppRouter";

type Props = {
  square: Square;
  onSetMin: (num: number) => void;
  onSetMax: (num: number) => void;
};

export const SquareFilter: React.FC<Props> = ({
  square,
  onSetMin,
  onSetMax,
}) => {
  const { min, min_range: minRange, max, max_range: maxRange } = square;

  const { pushQuery } = useAppRouter();

  const dispatch = useAppDispatch();
  const [from, setFrom] = React.useState(minRange);
  const [to, setTo] = React.useState(maxRange);

  // React.useEffect(() => {
  //   setFrom(min);
  //   setTo(max);
  // }, [min, max]);

  const handleChangeSlider = (value: number | number[]) => {
    const [from, to] = value as number[];

    setFrom(from);
    setTo(to);
  };

  const handleChangeComplete = (value: number | number[]) => {
    const [from, to] = value as number[];

    onSetMin(from);
    onSetMax(to);
    pushQuery("min_square", from.toString());
    pushQuery("max_square", to.toString());
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
