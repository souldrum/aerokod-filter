"use client";

import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";

export const ProjectFilter: React.FC = () => {
  const [value, setValue] = React.useState("all");

  return (
    <FilterWithTitle title="Проект">
      <div className="t7 border border-black-100 rounded-base px-5 py-3.5">
        <select
          className="outline-none w-full"
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
      </div>
    </FilterWithTitle>
  );
};
