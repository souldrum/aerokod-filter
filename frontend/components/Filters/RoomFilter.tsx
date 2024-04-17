import { Room } from "@/services/roomService.types";
import React, { useState } from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { RoomTab } from "./RoomTab";
import { useFilters } from "@/hooks/useApi";
import { useSearchParams } from "next/navigation";

export const RoomFilter: React.FC<{
  rooms: Room[];
  onSetRoom: (num: number) => void;
}> = ({ rooms, onSetRoom }) => {
  const searchParams = useSearchParams();
  const params = searchParams.get("rooms");

  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {rooms!.map((room) => (
          <RoomTab
            key={room.number}
            number={room.number}
            active={room.is_active}
            disabled={room.disabled}
            onSetNumber={onSetRoom}
          />
        ))}
      </div>
    </FilterWithTitle>
  );
};
