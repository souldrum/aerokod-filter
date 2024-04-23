import { useAppParams } from "@/hooks/useAppParams";
import { Room } from "@/services/roomService.types";
import React from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { RoomTab } from "./RoomTab";

export const RoomFilter: React.FC<{
  rooms: Room[];
}> = ({ rooms }) => {
  const { roomParams: params } = useAppParams();

  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {rooms.map((room) => (
          <RoomTab
            key={room.number}
            number={room.number}
            active={params.includes(room.number.toString())}
            disabled={room.disabled}
          />
        ))}
      </div>
    </FilterWithTitle>
  );
};
