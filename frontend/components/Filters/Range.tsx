import { formatRangeData } from "@/format/format";
import { useAppRouter } from "@/hooks/useAppRouter";
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
  minParams: string | null;
  maxParams: string | null;
};

export const Range: React.FC<Props> = ({
  name,
  title,
  min,
  max,
  minRange,
  maxRange,
  minParams,
  maxParams,
}) => {
  const { setQueries } = useAppRouter();

  const [from, setFrom] = React.useState(
    minParams ? Number(minParams) : minRange
  );
  const [to, setTo] = React.useState(maxParams ? Number(maxParams) : maxRange);

  React.useEffect(() => {
    if (!minParams && !maxParams) {
      setFrom(minRange);
      setTo(maxRange);
    }
  }, [minParams, minParams]);

  const handleChangeSlider = (value: number | number[]) => {
    const [from, to] = value as number[];
    setFrom(from);
    setTo(to);
  };

  const handleChangeComplete = (value: number | number[]) => {
    const [from, to] = value as number[];

    setQueries([
      { name: `min_${name}`, value: from.toString() },
      { name: `max_${name}`, value: to.toString() },
    ]);
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
        min={min}
        max={max}
        onChange={handleChangeSlider}
        onChangeComplete={handleChangeComplete}
      />
    </FilterWithTitle>
  );
};
