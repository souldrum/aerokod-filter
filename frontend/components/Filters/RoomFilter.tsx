import { Room } from "@/services/roomService.types";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { RoomTab } from "./RoomTab";

export const RoomFilter: React.FC<{ rooms: Room[] }> = ({ rooms }) => {
  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {rooms
          .sort((a, b) => a.number - b.number)
          .map((room) => (
            <RoomTab
              key={room.number}
              number={room.number}
              active={room.is_active}
              disabled={room.disabled}
            />
          ))}
      </div>
    </FilterWithTitle>
  );
};
