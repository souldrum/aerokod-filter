import { formatRoomsNumber } from "@/format/format";
import { useAppRouter } from "@/hooks/useAppRouter";
import cn from "classnames";
import React from "react";

type Props = {
  number: number;
  active: boolean;
  disabled: boolean;
};

export const RoomTab: React.FC<Props> = ({ number, active, disabled }) => {
  const { appendQuery, deleteQuery } = useAppRouter();

  React.useEffect(() => {
    if (disabled) deleteQuery("rooms", number.toString());
  }, [disabled, number]);

  const handleClick = (number: number) => {
    appendQuery("rooms", number.toString());
  };

  return (
    <button
      className={cn(
        "t7 border border-black-100 rounded-base px-4 py-4 sm:px-6 sm:py-3.5 cursor-pointer",
        active && "bg-blue !border-none text-white",
        disabled && "bg-gray-200 !border-none text-white !cursor-not-allowed"
      )}
      onClick={() => handleClick(number)}
      disabled={disabled}
    >
      {formatRoomsNumber(number)}
    </button>
  );
};
