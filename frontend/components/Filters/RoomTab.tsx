import { formatRoomsNumber } from "@/format/format";
import { useAppDispatch } from "@/hooks/useRedux";
import { setRooms } from "@/redux/slices/FiltersSlice";
import cn from "classnames";
import React from "react";

type Props = {
  number: number;
  active: boolean;
  disabled: boolean;
};

export const RoomTab: React.FC<Props> = ({ number, active, disabled }) => {
  const dispatch = useAppDispatch();

  return (
    <div
      className={cn(
        "t7 border border-black-100 rounded-base px-4 py-4 sm:px-6 sm:py-3.5 cursor-pointer",
        active && "bg-blue !border-none text-white",
        disabled && "bg-gray-200 !border-none text-white"
      )}
      onClick={() => dispatch(setRooms(number))}
    >
      {formatRoomsNumber(number)}
    </div>
  );
};
