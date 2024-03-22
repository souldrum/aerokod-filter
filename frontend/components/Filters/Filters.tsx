"use clients";

import React from "react";
import { ProjectFilter } from "./ProjectFilter";
import { Range } from "./Range";
import { ResetIcon } from "./ResetIcon";
import { RoomFilter } from "./RoomFilter";

export const Filters: React.FC = () => {
  const [startPrice, setStartPrice] = React.useState(1000000);
  const [endPrice, setEndPrice] = React.useState(14000000);

  const [startSquare, setStartSquare] = React.useState(21);
  const [endSquare, setEndSquare] = React.useState(98);

  const handleReset = () => {
    setStartPrice(1000000);
    setEndPrice(14000000);
    setStartSquare(21);
    setEndSquare(98);
  };

  return (
    <div className="flex flex-col gap-12 pb-16 mb-12 border-b-2 border-black-100 border-opacity-20">
      <div className="flex gap-3 justify-center xl:justify-between flex-wrap items-end">
        <ProjectFilter />
        <RoomFilter />
        <Range
          name="price"
          title="Стоимость"
          from={startPrice}
          to={endPrice}
          min={1000000}
          max={14000000}
          setFrom={setStartPrice}
          setTo={setEndPrice}
        />
        <Range
          name="square"
          title="Задайте площадь, м²"
          from={startSquare}
          to={endSquare}
          min={21}
          max={98}
          setFrom={setStartSquare}
          setTo={setEndSquare}
        />
      </div>

      <div className="flex justify-between t8">
        <div className="hidden xl:block xl:w-32"></div>
        <span className="t8">Найдено 245 квартир</span>
        <div className="flex items-center gap-3">
          <ResetIcon onReset={handleReset} />
          <span>Очистить все</span>
        </div>
      </div>
    </div>
  );
};
