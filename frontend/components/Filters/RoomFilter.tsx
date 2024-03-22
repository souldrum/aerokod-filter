import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { Room } from "./Room";

export const RoomFilter: React.FC = () => {
  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {["Ст", "1к", "2к", "3к", "4к"].map((room) => (
          <Room key={room} title={room} />
        ))}
      </div>
    </FilterWithTitle>
  );
};
