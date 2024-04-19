import { Room } from "@/services/roomService.types";
import React, { useState } from "react";
import { FilterWithTitle } from "./FilterWithTitle";
import { RoomTab } from "./RoomTab";
import { useFilters } from "@/hooks/useApi";
import { useSearchParams } from "next/navigation";

export const RoomFilter: React.FC<{
  rooms: Room[];
}> = ({ rooms }) => {
  const searchParams = useSearchParams();
  const params = searchParams.getAll("rooms");

  return (
    <FilterWithTitle title="Укажите количество комнат">
      <div className="flex justify-between">
        {rooms!.map((room) => (
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
