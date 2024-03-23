"use client";

import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

export const ProjectFilter: React.FC = () => {
  const [value, setValue] = React.useState("all");

  return (
    <FilterWithTitle title="Проект">
      <div className="relative flex items-center t7 border border-black-100 rounded-base py-4 px-6 lg:py-3.5">
        <select
          className="outline-none w-full appearance-none cursor-pointer"
          name="project"
          id="project"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        >
          <option value="all" disabled>
            Все
          </option>
          <option value="one">1</option>
          <option value="two">2</option>
          <option value="three">3</option>
        </select>
        <Caret className="absolute right-6 lg:right-5 pointer-events-none" />
      </div>
    </FilterWithTitle>
  );
};

const Caret: React.FC<React.SVGProps<SVGAElement>> = ({
  stroke = "#040306",
  width = 11,
  height = 7,
  className,
}) => {
  return (
    <svg
      className={className ? className : ""}
      width={width}
      height={height}
      viewBox="0 0 11 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 1L5.5 5.5L10 1" stroke={stroke} strokeWidth="1.5" />
    </svg>
  );
};
