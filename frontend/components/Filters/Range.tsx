"use client";

import { formatPrice } from "@/format/format";
import Slider from "rc-slider";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

type Props = {
  name: "price" | "square";
  title: string;
  from: number;
  to: number;
  min: number;
  max: number;
  setFrom: (value: number) => void;
  setTo: (value: number) => void;
};

export const Range: React.FC<Props> = ({
  name,
  title,
  from,
  to,
  min,
  max,
  setFrom,
  setTo,
}) => {
  const formatValue = (value: number) =>
    name === "price" ? formatPrice(value) : value;

  const handleChangeSlider = (value: number | number[]) => {
    if (typeof value === "number") return;

    const [from, to] = value;

    setFrom(from);
    setTo(to);
  };

  return (
    <FilterWithTitle className="relative" title={title}>
      <div className="flex justify-between t7 border border-black-100 rounded-base px-5 py-3.5">
        <div>от {formatValue(from)}</div>
        <div className="bg-black-100 opacity-20 pb-px self-center w-5"></div>
        <div>до {formatValue(to)}</div>
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
          },
        }}
        range
        value={[from, to]}
        min={min}
        max={max}
        onChange={handleChangeSlider}
      />
    </FilterWithTitle>
  );
};
