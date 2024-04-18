import { formatRangeData } from "@/format/format";
import { useAppRouter } from "@/hooks/useAppRouter";
import { Price } from "@/services/roomService.types";
import Slider from "rc-slider";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

type Props = {
  price: Price;
  onSetMin: (num: number) => void;
  onSetMax: (num: number) => void;
};

export const PriceFilter: React.FC<Props> = ({ price, onSetMin, onSetMax }) => {
  const { min, min_range: minRange, max, max_range: maxRange } = price;

  const { pushQuery } = useAppRouter();

  const [from, setFrom] = React.useState(min || minRange);
  const [to, setTo] = React.useState(max ? max : maxRange);

  React.useEffect(() => {
    setFrom(min);
    setTo(max);
  }, [min, max]);

  const handleChangeSlider = (value: number | number[]) => {
    const [from, to] = value as number[];
    setFrom(from);
    setTo(to);
  };

  const handleChangeComplete = (value: number | number[]) => {
    const [from, to] = value as number[];

    onSetMin(from);
    onSetMax(to);
    pushQuery("min_price", from.toString());
    pushQuery("max_price", to.toString());
  };

  return (
    <FilterWithTitle className="relative" title="Стоимость">
      <div className="flex justify-between t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <div>от {formatRangeData("price", from)}</div>
        <div className="bg-black-100 opacity-20 pb-px self-center w-5"></div>
        <div>до {formatRangeData("price", to)}</div>
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
