import { formatRangeData } from "@/format/format";
import Slider from "rc-slider";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

type Props = {
  name: "price" | "square";
  title: string;
  min: number;
  max: number;
  minRange: number;
  maxRange: number;
};

export const Range: React.FC<Props> = ({
  name,
  title,
  min,
  max,
  minRange,
  maxRange,
}) => {
  const [from, setFrom] = React.useState(min);
  const [to, setTo] = React.useState(max);

  const handleChangeSlider = (value: number | number[]) => {
    if (typeof value === "number") return;

    const [from, to] = value;

    setFrom(from);
    setTo(to);
  };

  return (
    <FilterWithTitle className="relative" title={title}>
      <div className="flex justify-between t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <div>от {formatRangeData(name, from)}</div>
        <div className="bg-black-100 opacity-20 pb-px self-center w-5"></div>
        <div>до {formatRangeData(name, to)}</div>
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
        min={minRange}
        max={maxRange}
        onChange={handleChangeSlider}
      />
    </FilterWithTitle>
  );
};
