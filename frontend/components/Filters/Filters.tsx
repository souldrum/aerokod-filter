"use clients";

import React from "react";
import { ProjectFilter } from "./ProjectFilter";
import { Range } from "./Range";
import { ResetIcon } from "./ResetIcon";
import { RoomFilter } from "./RoomFilter";
import { useMobile } from "@/hooks/useMobile";
import { FloatingOverlay } from "@floating-ui/react";
import { Button } from "../Button/Button";

export const Filters: React.FC = () => {
  const isMobile = useMobile();

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

  if (isMobile) {
    return (
      <FloatingOverlay
        className="fixed top-0 inset-x-0 z-10 backdrop-blur-lg backdrop-brightness-50"
        lockScroll
      >
        <div className="bg-white p-5 pb-0 rounded-b-2xl">
          <CloseIcon className="ml-auto mb-6" />
          <div className="flex flex-col gap-8">
            <h4>ФИЛЬТР</h4>
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
          <Button className="my-12 p-3 w-full">Смотреть квартиры</Button>
        </div>
      </FloatingOverlay>
    );
  }

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

const CloseIcon: React.FC<React.SVGProps<SVGAElement>> = ({
  width = 30,
  height = 30,
  fill = "#444444",
  className,
}) => {
  return (
    <svg
      className={className ? className : ""}
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width}
        height={height}
        rx="15"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M10.5 20.625L9.375 19.5L13.875 15L9.375 10.5L10.5 9.375L15 13.875L19.5 9.375L20.625 10.5L16.125 15L20.625 19.5L19.5 20.625L15 16.125L10.5 20.625Z"
        fill="white"
      />
    </svg>
  );
};
